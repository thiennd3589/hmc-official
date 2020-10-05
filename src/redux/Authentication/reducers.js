import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from './actions';

const INITIAL_STATE = {
    user: null,
    error: null
}

const Authentication = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP_SUCCESS: return {
            ...state,
            data: action.payload,
        }
        case SIGN_UP_FAILURE: return {
            ...state,
            error: action.payload
        }
        default: return state
    }
}

export default Authentication;