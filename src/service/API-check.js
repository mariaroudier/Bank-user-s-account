
export function getLoginData(data) {
    if (data.status !== 400) {
        const obj = {
            status: data.status,
            message: data.message,
            token: data.body.token
        }
        console.log(obj)
        return obj;
    } else {
        const obj = {
            status: data.status,
            message: data.message,
        }
        return obj;
    }
}