import TYPES from '../types/task';
import { put, call, takeEvery } from 'redux-saga/effects'
import { deleteTask } from '../actionCreators/task'

function fetchTodoDelete(id) {
  return fetch('http://localhost:3001/task', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id
        })
      }).then(res => res.status)
}

function* workerTodoDelete(action) {
  yield call(fetchTodoDelete, action.data);
  yield put(deleteTask(action.data))
}

export function* watchTodoDelete() {
  yield takeEvery(TYPES.DELETE_TASK_SAGA, workerTodoDelete);
}
