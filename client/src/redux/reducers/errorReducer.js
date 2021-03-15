import { ERROR } from '../types/error';

const errorReducer = (error = {}, action) => {
    switch (action.type) {
        case ERROR:
          return action.data.errorStatus !== 200 ? {...error, status: true, errorMessage: action.data.errorMessage} : error;
        default: return error
    }
}

export default errorReducer;
