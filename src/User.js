import React from 'react';
import { Button } from '@material-ui/core';

const User = (props) => {
    const { first_name, last_name, id, onUpdateUser, onDeleteUser } = props;

    return (
        <ul key={id}>
            <li>
                {first_name} {last_name}
                <Button variant="contained" onClick={() => onDeleteUser(id)} >Delete</Button>
                <Button variant="contained" color="primary" onClick={() => onUpdateUser(first_name, last_name, id)}>Update</Button>
            </li>
        </ul>
    );
}

export default User;