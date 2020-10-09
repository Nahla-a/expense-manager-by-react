import React from 'react';
import PropTypes from 'prop-types';


export function InputBox(props){
    return(
        <div> 
            <span>{props.label} </span>
            <input type={props.type}/>
        </div>
    )
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired
  };