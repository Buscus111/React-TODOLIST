import { errorHandler } from '../actionCreators/error';
import { changeStatus } from '../actionCreators/task'


export const statusChangeThunk = (id) => async (dispatch, getState) => {
  const response = await fetch('http://localhost:3001/task/status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        })
      })
      if (response.status === 200) {
        dispatch(changeStatus(id))
      }
      else {
        const error = await response.json()
        dispatch(errorHandler(response.status, error ))
      }
}
