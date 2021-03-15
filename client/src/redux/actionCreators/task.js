import TYPES from '../types/task';

export function addAllTasks(tasks) {
  return {
    type: TYPES.ADD_ALL_TASK,
    data: tasks
  }
}

export function addNewTask(id, text, status, editStatus) {
  return {
    type: TYPES.ADD_TASK,
    data: {
      text,
      editStatus,
      _id: id,
      status,
    }
  }
}
export function deleteTask(id) {
  return {
    type: TYPES.DELETE_TASK,
    data: id
  }
}
export function changeStatus(id) {
  return {
    type: TYPES.CHANGE_STATUS,
    data: id
  }
}
export function editButtonTask(id) {
  return {
    type: TYPES.EDIT_STATUS,
    data: id
  }
}
export function editTask(text, id) {
  return {
    type: TYPES.EDIT_TASK,
    data: {
      text,
      id
    }
  }
}

export function addNewTaskSaga(text) {
  return {
    type: TYPES.ADD_TASK_SAGA,
    data: text
  }
}
export function deleteTaskSaga(id) {
  return {
    type: TYPES.DELETE_TASK_SAGA,
    data: id
  }
}
export function changeStatusSaga(id) {
  return {
    type: TYPES.CHANGE_STATUS_SAGA,
    data: id
  }
}
export function editButtonTaskSaga(id) {
  return {
    type: TYPES.EDIT_STATUS_SAGA,
    data: id
  }
}
export function editTaskSaga(text, id) {
  return {
    type: TYPES.EDIT_TASK_SAGA,
    data: {
      text,
      id
    }
  }
}
