import React from "react";

const userOutput = (props) => {

    const {userName} = props;

        return (
        <div>
            <p>Some random text: {userName}</p>
            <p>Blahblahblah</p>
        </div>
        )
    };

export default userOutput;