import React from 'react';

const person = (props) => {
    const {name, age} = props;

    return (
        <div>
            <p onClick={props.click}>I'm a person and I am {age} years {name} old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}

export default person;