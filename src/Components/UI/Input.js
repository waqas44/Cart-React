import React from 'react';
import classes from './Input.module.css'

const InputComp = React.forwardRef((props, ref) => {

    return (
        <div className={classes.input} >
            <label htmlFor={props.input.id} > {props.label}</label>

            <input ref={ref} {...props.Input} />

        </div>

    );


});

export default InputComp;