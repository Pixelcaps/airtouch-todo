import { ADD_TODO, GET_TODOS, DELETE_TODO } from '../actions/action_creators'

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case GET_TODOS:
            return action.payload
        case DELETE_TODO:
            return state.filter(({ id }) => id !== action.payload.id)
        default:
            return state;
    }
}

export default todoReducer;