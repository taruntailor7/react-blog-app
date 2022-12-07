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

export const UpdateStart = (userCredentials) => ({
    type : "UPDATE_START",
})

export const UpdateSuccess = (USER) => ({
    type : "UPDATE_SUCCESS",
    payload : USER
})

export const UpdateFailure = () => ({
    type : "UPDATE_FAILURE",
})