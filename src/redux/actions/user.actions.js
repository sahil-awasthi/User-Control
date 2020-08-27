import { FETCH_USERS, ADD_USER } from './actionTypes';
import axios from 'axios';

const fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        users
    };
}

export const handleFetchUsers = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://reqres.in/api/users');

            dispatch(fetchUsers(data.data));
        } catch (error) {
            console.log(error);
        }
    }
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

export const handleAddUser = (user) => { // user { name, job }
    return async dispatch => {
        try {
            const { data } = await axios.post('https://reqres.in/api/users', user);

            const [first_name = '', last_name = ''] = data.name.split(' ');

            data.first_name = first_name;
            data.last_name = last_name;

            dispatch(addUser(data));
        } catch (error) {
            console.log('error', error);
        }
    }
}