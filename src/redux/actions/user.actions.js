import { FETCH_USERS, ADD_USER, DELETE_USER, UPDATE_USER } from './actionTypes';
import axios from 'axios';

const fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        users
    };
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}

const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id
    }
}

const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
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

export const handleDeleteUser = (id) => {
    return async dispatch => {
        try {
            axios.delete(`https://reqres.in/api/users/${id}`);
            dispatch(deleteUser(id))

        } catch (error) {
            console.log(error)
        }
    }
}

export const handleUpdateUser = (id) => {
    return async dispatch => {
        try {
            axios.patch(`https://reqres.in/api/users/${id}`);
            dispatch(updateUser(id))
        } catch (error) {
            console.log(error)
        }
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