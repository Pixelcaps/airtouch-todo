import { apiClient } from '../api-client';

export const ADD_TODO = 'ADD_TODO';
export const GET_TODOS = 'GET_TODOS';
export const DELETE_TODO = 'REMOVE_TODO';

export function addTodo(todo) {
    return (dispatch) => {
        return apiClient.createTodo(todo).then(res => {
            if(res.success === true){
                todo.id = res.payload.id;
                dispatch(addTodoSuccess(todo));
            }
        });
    }
}

export function addTodoSuccess(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function getTodos() {
    return (dispatch) => {
        return apiClient.getAllTodos().then(res => {
            if(res.success === true) {
                dispatch(getTodosSuccess(res.payload));
            }
        });
    }
}

export function getTodosSuccess(todos) {
    return {
        type: GET_TODOS,
        payload: todos
    }
}

export function deleteTodo(todo) {
    return (dispatch) => {
        return apiClient.deleteTodo(todo.id).then(res => {
            if(res.success === true) {
                dispatch(deleteTodoSuccess(todo));
            }
        });
    }
}

export function deleteTodoSuccess(todo) {
    return {
        type: DELETE_TODO,
        payload: todo
    }
}
