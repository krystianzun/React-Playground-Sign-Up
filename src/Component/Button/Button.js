import React from 'react';
import classes from './Button.module.css'

const Button = (props) => {
    const buttonParentClass = [classes.Parent]; 
    
    if(props.btnType === 'Active'){
        buttonParentClass.push(classes.Active); 
    }
    
    return (
        <div className={buttonParentClass.join(' ')}>
        <button 
        className={[classes.Button,classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
            {props.children}
        </button>
        </div>
    );
};

export default Button;