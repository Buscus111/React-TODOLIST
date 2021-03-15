import TYPES from '../types/task';
import { put, call, takeEvery } from 'redux-saga/effects'
import { changeStatus } from '../actionCreators/task'

function fetchTodoStatusChange(id) {
  return fetch('http://localhost:3001/task/status', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        })
      }).then(res => res.status)
}

function* workerTodoStatusChange(action) {
  yield call(fetchTodoStatusChange, action.data);
  yield put(changeStatus(action.data))
}

export function* watchTodoStatusChange() {
  yield takeEvery(TYPES.CHANGE_STATUS_SAGA, workerTodoStatusChange);
}
