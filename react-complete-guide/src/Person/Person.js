import React from 'react';

const person = (props) => {
    const {name, age} = props;

    return (
        <div>
            <p>I'm a person and I am {age} years {name} old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;