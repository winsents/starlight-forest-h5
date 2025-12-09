// const urlHead = "https://online.jup360.com/starlight_forest/";
const urlHead = "http://localhost:29001/starlight_forest/";

const reqInstance = axios.create({
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
})

reqInstance.interceptors.request.use(
    (config) => {
        config.withCredentials = true;
        config.url = urlHead + config.url;
        return config
    },
    (error) => Promise.reject(error),
)

// reqInstance.interceptors.response.use(response => {
//     console.log("1")
//     if (response.data.errcode == -11) {
//
//     }
//     if (response.data.code != 0) {
//
//         showToast({
//             message: response.data.errmsg || '请求失败',
//             type: 'none'
//         });
//         return Promise.reject(response.data);
//     }
//
//     return response.data;
// })


reqInstance.interceptors.response.use(
    (response) => {
        // 1. HTTP 层 2xx/3xx
        const payload = response.data || {}

        const bizCode = payload.code
        const bizMsg = payload.msg || payload.message || '业务错误'
        const bizData = payload.data

        // 若后端没提供 code，就认为按 HTTP 语义成功
        if (typeof bizCode === 'undefined') {
            return payload
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
