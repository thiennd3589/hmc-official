export const GET_ALL_DATABASE = 'GET_ALL_DATABASE';
export const GET_ALL_DATABASE_SUCCESS = 'GET_ALL_DATABASE_SUCCESS';
export const GET_DATABASE_FAILURE = 'GET_DATABASE_FAILURE';

export const queryAllDatabase = () => ({
    type: GET_ALL_DATABASE,
})

export const queryAllDatabaseSuccess = (data) => ({
    type: GET_ALL_DATABASE_SUCCESS,
    payload: data
})


export const queryDatabaseFailure = (error) => ({
    type: GET_DATABASE_FAILURE,
    payload: error
})
