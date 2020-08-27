import React from 'react';

const User = (props) => {
    const { first_name, last_name, id, onUpdateUser, onDeleteUser } = props;

    return (
        <ul key={id}>
            <li>
                {first_name} {last_name}
                <button onClick={() => onDeleteUser(id)} >Delete</button> 
                <button onClick={() => {
                    return (
                        onUpdateUser(first_name, last_name, id),
                        onDeleteUser(id)
                    )
                } }>Update</button>
            </li>
        </ul>
    );
}

export default User;