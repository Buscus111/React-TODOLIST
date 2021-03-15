import { ADD_LOADER, REMOVE_LOADER } from '../types/loader'

const addLoader = () => {
  return {
    type: ADD_LOADER 
  }
}
const removeLoader = () => {
  return {
    type: REMOVE_LOADER 
  }
}

export {
  addLoader,
  removeLoader
}
