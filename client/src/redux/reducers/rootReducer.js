import { combineReducers } from "redux";
import taskReducer from './tasksReducer';
import loadReducer from './loadReducer'
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  loader: loadReducer,
  error: errorReducer,
})

export default rootReducer
