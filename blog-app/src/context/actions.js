export const LoginStart = (userCredentials) => ({
    type : "LOGIN_START",
})

export const LoginSuccess = (data) => ({
    type : "LOGIN_SUCCESS",
    payload : data
})

export const LoginFailure = () => ({
    type : "LOGIN_FAILURE",
})

export const Logout = () => ({
    type : "LOGOUT",
})