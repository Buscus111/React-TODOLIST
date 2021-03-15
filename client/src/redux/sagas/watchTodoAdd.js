import TYPES from '../types/task';
import { put, call, takeEvery } from 'redux-saga/effects'
import { addLoader, removeLoader } from '../actionCreators/loader';
import { addNewTask } from '../actionCreators/task'

function fetchTodoAdd(text) {
  return fetch('http://localhost:3001/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text
        })
      }).then(res => res.json())
}

function* workerTodoAdd(action) {
  yield put(addLoader());
  const result = yield call(fetchTodoAdd, action.data);
  const { _id, text, status, editStatus } = result;
  yield put(addNewTask(String(_id), text.trim(), status, editStatus))
  yield put(removeLoader())

}

export function* watchTodoAdd() {
  yield takeEvery(TYPES.ADD_TASK_SAGA, workerTodoAdd);
}
