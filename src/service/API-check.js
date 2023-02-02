
/* Get login data */
export function getLoginData(data) {
    console.log(data)
    if (data.status !== 400) {
        const object = {
            status: data.status,
            message: data.message,
            token: data.token
        }

        return object;
    } else {

        const object = {
            status: data.status,
            message: data.message,
        }
        return object;
    }
}


export function getLoginFetchData(data) {
    if (data.body !== undefined) {
        const object = {
            status: data.status,
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName
        }

        return object;
    } else {
        const object = {
            status: 0,
            email: "",
            firstName: "",
            lastName: ""
        }

        return object;
    }
}