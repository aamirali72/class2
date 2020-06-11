import React from 'react';

function Dinner(props) {

    return (
        <div>
            <h1>We are serving {props.dishNAme}</h1>
            <h1>We are serving {props.sweetdish}</h1>
        </div>
    )
}

export default Dinner;