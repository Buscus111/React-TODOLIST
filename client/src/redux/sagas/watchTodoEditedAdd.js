import TYPES from '../types/task';
import { put, call, takeEvery } from 'redux-saga/effects'
import { editTask } from '../actionCreators/task'

function fetchTodoEditedAdd(data) {
  return fetch('http://localhost:3001/task/edit', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: data.id,
          newText: data.text
        })
      }).then(res => res.status)
}

function* workerTodoEditedAdd(action) {
  console.log(action.data);
  yield call(fetchTodoEditedAdd, action.data);
  yield put(editTask(action.data.text, action.data.id))
}

export function* watchTodoEditedAdd() {
  yield takeEvery(TYPES.EDIT_TASK_SAGA, workerTodoEditedAdd);
}
