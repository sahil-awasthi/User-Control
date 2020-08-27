import { FETCH_USERS, ADD_USER } from '../actions/actionTypes';

export default function (state, action) {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.user];

        case FETCH_USERS:
            return [...action.users];

        default:
            return state;
    }

}


//2