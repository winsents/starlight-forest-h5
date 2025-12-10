 // const urlHead = "https://online.jup360.com/starlight_forest/v1/";
const urlHead = "http://localhost:29001/starlight_forest/v1/";

 // ====== 刷新 Token 相关状态 ======
 let isRefreshing = false
 let refreshSubscribers = []

 function addRefreshSubscriber(cb) {
     refreshSubscribers.push(cb)
 }

 function onRefreshed(newToken) {
     refreshSubscribers.forEach(cb => cb(newToken))
     refreshSubscribers = []
 }

 /**
  * 刷新 token:
  * - 如果后端用 cookie 刷新，只要调用接口成功即可
  * - 如果后端会返回新的 accessToken，就在这里存到 localStorage
  */
 function refreshToken() {
     return reqInstance.get('/user/refresh_token', {
         // 自定义标记，避免这次请求自己再触发 5001 逻辑
         skipAuthCheck: true,
     }).then(res => {
         // 视你的后端返回结构调整：
         const data = res?.data || {}
         const newToken =
             data.token ||
             data.accessToken ||
             data.payload?.token

         if (newToken) {
             // 如果你是前端持有 token 的模式，用这个
             localStorage.setItem('starlight_forest_token', newToken)
         }

         // cookie 模式，newToken 可能为 undefined，问题不大
         return newToken
     })
 }



 // ====== axios 实例 ======
 const reqInstance = axios.create({
     baseURL: urlHead,                // 用 baseURL，避免你重试时 URL 被重复拼接
     timeout: 10000,
     headers: {
         'Content-Type': 'application/json;charset=UTF-8',
     },
     withCredentials: true,           // 直接在实例上开启
 })

 // ====== 请求拦截器 ======
 reqInstance.interceptors.request.use(
     (config) => {
         // 如果你是 header 携带 token，在这里统一带上
         const token = localStorage.getItem('starlight_forest_token')
         if (token && !config.headers.Authorization) {
             config.headers.Authorization = `Bearer ${token}`
         }

         return config
     },
     (error) => Promise.reject(error),
 )

 // ====== 响应拦截器 ======
 reqInstance.interceptors.response.use(
     (response) => {
         // 1. HTTP 层 2xx/3xx
         const payload = response.data || {}

         const bizCode = payload.code
         const bizMsg = payload.msg || payload.message || payload.errmsg || '业务错误'
         const bizData = payload.payload ?? payload.data

         // 若后端没提供 code，就认为按 HTTP 语义成功
         if (typeof bizCode === 'undefined') {
             return payload
         }

         // ====== 登录过期 / token 失效处理（假定 5001）======
         if (bizCode === 5001) {
             const originalConfig = response.config

             // 当前请求本身就是刷新 token，直接认为登录彻底失效，避免死循环
             if (
                 originalConfig.skipAuthCheck ||
                 (typeof originalConfig.url === 'string' &&
                     originalConfig.url.includes('/user/refresh_token'))
             ) {
                 const err = new Error('登录状态已失效，请重新登录')
                 err.isAuthError = true
                 return Promise.reject(err)
             }

             // 如果已经在刷新，后续请求进入队列等待
             if (isRefreshing) {
                 return new Promise((resolve, reject) => {
                     addRefreshSubscriber((newToken) => {
                         // 如果使用 header token，这里重新挂上
                         if (newToken && originalConfig.headers) {
                             originalConfig.headers.Authorization = `Bearer ${newToken}`
                         }
                         resolve(reqInstance(originalConfig))
                     })
                 })
             }

             // 第一个触发 5001 的请求，发起刷新
             isRefreshing = true

             return refreshToken()
                 .then((newToken) => {
                     isRefreshing = false
                     onRefreshed(newToken)

                     // if (newToken && originalConfig.headers) {
                     //     originalConfig.headers.Authorization = `Bearer ${newToken}`
                     // }

                     // 用原始配置重试请求
                     return reqInstance(originalConfig)
                 })
                 .catch((err) => {
                     isRefreshing = false
                     refreshSubscribers = []

                     // 刷新失败，清理前端登录态（如果有）
                     localStorage.removeItem('starlight_forest_token')
                     // 这里按你项目需要做跳转
                     // window.location.href = '/login'

                     err = err || new Error('登录状态已失效，请重新登录')
                     err.isAuthError = true
                     return Promise.reject(err)
                 })
         }

         // 2. 有 code，且为成功
         if (bizCode === 0) {
             // 只把真正业务数据返回出去
             return bizData
         }

         // 3. 有 code，但为业务失败 → 直接 reject 出去
         const err = new Error(bizMsg)
         err.isBizError = true
         err.bizCode = bizCode
         err.raw = payload
         return Promise.reject(err)
     },
     (error) => {
         // 一定是 HTTP 层失败或网络异常

         // 请求发出去了但收到非 2xx 响应
         if (error.response) {
             const { status, data } = error.response
             const payload = data || {}

             const errMsg =
                 payload.msg ||
                 payload.message ||
                 payload.errmsg ||
                 `HTTP 错误 (${status})`

             const err = new Error(errMsg)
             err.isHttpError = true
             err.httpStatus = status
             err.raw = payload

             return Promise.reject(err)
         }

         // 请求没发出去 or 根本没响应（断网、超时、CORS 等）
         const err = new Error(
             error.message || '网络异常，请检查网络连接',
         )
         err.isNetworkError = true
         return Promise.reject(err)
     },
 )
