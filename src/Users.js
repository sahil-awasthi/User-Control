import React from 'react';

const input = (props) => {
    return (
        <div>
            <h1>Users: {props.name}</h1>
        <form onSubmit={props.handleSubmit}>
            <label>
                Name:
          <input type="text" value={props.dummy} onChange= {props.nameEntered} />
            </label>
            <input type="submit" value= "submit" />
        </form>
        </div>
)
}

export default input