import { combineReducers } from 'redux';
import todoReducer from './todo_reducer';

const rootReducer = combineReducers({
  todoList: todoReducer
});

export default rootReducer;
