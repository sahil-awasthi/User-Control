import { FETCH_USERS, ADD_USER } from './actionTypes';

const fetchUsers = (users) => {
    return {
        type: FETCH_USERS,
        users
    }
}

export const handleFetchUsers = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('https://reqres.in/api/users');
            dispatch(fetchUsers(data.data))
        } catch (error) {
            console.log(error);
        }
    }
}