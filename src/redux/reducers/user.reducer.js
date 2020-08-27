import { FETCH_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from '../actions/actionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.user];

        case FETCH_USERS:
            return [...action.users];

        case DELETE_USER:
            return state.filter((user => user.id !== action.id))

        case UPDATE_USER:
            return state.map((user) => {
                if (user.id === action.id) {
                    [user.first_name, user.last_name] = action.user.name.split(' ')
                }
                return user
            })

        default:
            return state;
    }

}