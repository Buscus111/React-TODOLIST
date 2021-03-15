import { ERROR } from '../types/error'

const errorHandler = (errorStatus, errorMessage) => {
  return {
    type: ERROR,
    data: {
      errorStatus,
      errorMessage 
    }  
  }
}

export {
  errorHandler
}
