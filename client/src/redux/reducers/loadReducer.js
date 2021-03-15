import { ADD_LOADER, REMOVE_LOADER } from '../types/loader';

const loadReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_LOADER:
            return true
        case REMOVE_LOADER:
            return false
        default: return state
    }
}

export default loadReducer;