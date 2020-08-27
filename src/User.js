import React from 'react';

const User = (props) => {
    const { first_name, last_name, id, onUpdateUser } = props;

    return (
        <ul key={id}>
            <li>
                {first_name} {last_name}  <button>Delete</button> <button onClick={() => onUpdateUser(first_name, last_name, id)}>Update</button>
            </li>
        </ul>
    );
}

export default User;