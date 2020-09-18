import {GET_DATABASE_FAILURE, GET_ALL_DATABASE_SUCCESS } from './actions';

const INITIAL_STATE = {
    data: [],
    error: null
}

const Database = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_DATABASE_SUCCESS: return {
            ...state,
            data: action.payload,
        }
        case GET_DATABASE_FAILURE: return {
            ...state,
            error: action.payload
        }
        default: return state
    }
}

export default Database;