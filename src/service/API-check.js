
/* Get login data */
export function getLoginData(data) {

    if (data.status !== 400) {
        const obj = {
            status: data.status,
            message: data.message,
            token: data.body.token
        }
        return obj;
    } else {
        const obj = {
            status: data.status,
            message: data.message,
        }
        return obj;
    }
}
/* Get Login Fetch */
export function getLoginFetchData(data) {
    if (data.body !== undefined) {
        console.log(data)
        const obj = {
            status: data.status,
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName
        }
        return obj;
    } else {
        const obj = {
            status: 0,
            email: "",
            firstName: "",
            lastName: "",
        }
        return obj;
    }

}

// save profil data
export function saveProfilData(data) {
    const object = {
        status: data.status,
        message: data.message,
    }
    return object
}