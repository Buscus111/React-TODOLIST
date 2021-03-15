import initState from './initState'
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { watchTodoAdd } from './sagas/watchTodoAdd';
import { watchTodoDelete } from './sagas/watchTodoDelete';
import { watchTodoStatusChange } from './sagas/watchTodoStatusChange';
import { watchTodoEditStatusChange } from './sagas/watchTodoEditStatusChange';
import { watchTodoEditedAdd } from './sagas/watchTodoEditedAdd';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(watchTodoAdd);
sagaMiddleware.run(watchTodoDelete);
sagaMiddleware.run(watchTodoStatusChange);
sagaMiddleware.run(watchTodoEditStatusChange);
sagaMiddleware.run(watchTodoEditedAdd);

export default store;
