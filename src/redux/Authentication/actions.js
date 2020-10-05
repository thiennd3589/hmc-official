export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FALILURE";

export const signUp = (payload) => ({
    type: SIGN_UP,
    payload
})

export const signUpSuccess = (user) => ({
    type: SIGN_UP_SUCCESS,
    payload: user
})

export const signUpFailure = (error) => ({
    type: SIGN_UP_FAILURE,
    payload: error
})