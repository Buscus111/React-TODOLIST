import { errorHandler } from '../actionCreators/error';
import { editTask } from '../actionCreators/task'

export const addEditedTaskThunks = (event, id) => async (dispatch, getState) => {
  const response = await fetch('http://localhost:3001/task/edit', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newText: event.target.edit.value,
      id
    })
  })
  if (response.status === 200) {
    dispatch(editTask(event.target.edit.value, id))
  }
  else {
    const error = await response.json()
    dispatch(errorHandler(response.status, error ))
  }
}
