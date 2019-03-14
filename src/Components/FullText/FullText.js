import React from 'react';
import Aux from '../../hoc/Aux/Aux'

const FullText = (props) => {
    return (<Aux>
        <p style={{marginTop: '1em', fontSize: '1.2em'}}>{props.text}</p>
    </Aux>)
};

export default FullText;
