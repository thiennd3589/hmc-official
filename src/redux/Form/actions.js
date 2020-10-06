export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (info) => ({
    type: REGISTER,
    payload: info
});

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
});

export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
})