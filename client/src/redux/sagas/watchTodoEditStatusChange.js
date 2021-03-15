import TYPES from '../types/task';
import { put, call, takeEvery } from 'redux-saga/effects'
import { editButtonTask } from '../actionCreators/task'

function fetchTodoEditStatusChange(id) {
  return fetch('http://localhost:3001/task/edit-status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        })
      }).then(res => res.status)
}

function* workerTodoEditStatusChange(action) {
  yield call(fetchTodoEditStatusChange, action.data);
  yield put(editButtonTask(action.data))
}

export function* watchTodoEditStatusChange() {
  yield takeEvery(TYPES.EDIT_STATUS_SAGA, workerTodoEditStatusChange);
}
