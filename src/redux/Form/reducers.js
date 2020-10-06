import { REGISTER_SUCCESS, REGISTER_FAILURE } from './actions';

const INITIAL_STATE = {
    success: null,
    error: ''
}

const Register = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS: return {
            ...state,
            success: true
        }
        case REGISTER_FAILURE: return {
            ...state,
            error: action.payload
        }
        default: return state
    }
}

export default Register; 
