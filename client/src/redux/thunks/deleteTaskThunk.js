import {deleteTask } from '../actionCreators/task'
import { errorHandler } from '../actionCreators/error'


export const deleteTaskThunk = (id) => async (dispatch, getState) => {
  const response = await fetch('http://localhost:3001/task', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        })
      })
      if (response.status === 200) {
        dispatch(deleteTask(id))
      }
      else {
        const error = await response.json()
        dispatch(errorHandler(response.status, error ))
      }
}
