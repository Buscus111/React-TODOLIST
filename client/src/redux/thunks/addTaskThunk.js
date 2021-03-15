import { addLoader, removeLoader } from '../actionCreators/loader'
import { errorHandler } from '../actionCreators/error'
import { addNewTask } from "../actionCreators/task";

export const addTaskThunk = (text) => async (dispatch, getState) => {
  if(text.trim()) {
    dispatch(addLoader());
    const response = await fetch('http://localhost:3001/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text
      })
    })
    if (response.status === 200) {
      const {  _id, text, status, editStatus} = await response.json()
      dispatch(addNewTask(String(_id), text.trim(), status, editStatus))
      dispatch(removeLoader());
    }
    else {
      const error = await response.json()
      dispatch(errorHandler(response.status, error ))
    }
  }
}
