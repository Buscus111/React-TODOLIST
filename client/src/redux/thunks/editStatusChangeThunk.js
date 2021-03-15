import { errorHandler } from '../actionCreators/error';
import { editButtonTask } from '../actionCreators/task';

export const editStatusChangeThunk = (id) => async (dispatch, getState) => {
  const response = await fetch('http://localhost:3001/task/edit-status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        })
      })
      if (response.status === 200) {
        dispatch(editButtonTask(id))
      }
      else {
        const error = await response.json()
        dispatch(errorHandler(response.status, error ))
      }
}
