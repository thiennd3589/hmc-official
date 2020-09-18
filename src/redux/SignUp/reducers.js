import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './actions';

const INITIAL_STATE = {
    success: null,
    error: ''
}

const SignUp = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS: return {
            ...state,
            success: true
        }
        case SIGN_UP_FAILURE: return {
            ...state,
            error: action.payload
        }
        default: return state
    }
}

export default SignUp;