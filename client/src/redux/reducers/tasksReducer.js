import TYPES from '../types/task';

const tasksReducer = ( tasks = [], action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return [...tasks, action.data];
      
    case TYPES.ADD_ALL_TASK:
      return action.data;

    case TYPES.DELETE_TASK:
      return tasks.filter(el => el._id !== action.data);

    case TYPES.CHANGE_STATUS:
      return tasks.map( (el) => el._id === action.data ? {...el, status: !el.status} : el)

    case TYPES.EDIT_STATUS:
      return tasks.map( (el) => el._id === action.data ? {...el, editStatus: !el.editStatus} : el)

    case TYPES.EDIT_TASK:
      return tasks.map( (el) => el._id === action.data.id ? {...el, text: action.data.text, editStatus: !el.editStatus} : el)

    default: return tasks;
  }
}

export default tasksReducer
