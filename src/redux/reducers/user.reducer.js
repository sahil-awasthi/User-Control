import { FETCH_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from '../actions/actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.user];

        case FETCH_USERS:
            return [...action.users];

        case DELETE_USER:
            return state.filter((user => user.id !== action.id));

        case UPDATE_USER:
            console.log('user reducer', state);
            const index = state.findIndex((user) => user.id === action.user.id);
            state.splice(index, 1, action.user );
            return state

        default:
            return state;
    }

}
