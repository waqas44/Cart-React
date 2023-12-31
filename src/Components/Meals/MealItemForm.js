// import React, { useState } from 'react';
import { useRef, useState } from 'react';
import InputComp from '../UI/Input';
import classes from './MealItemForm.module.css';



const MealItemForm = (props) => {
    const [amountIsValid, setAmounIsValid] = useState(true);
    const amountInputRef = useRef();


    const submitHandler = (event) => {
        event.preventdefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredCurrentAmount = +enteredAmount;

        if (
            enteredCurrentAmount.trim().length === 0 ||
            enteredCurrentAmount < 1 ||
            enteredCurrentAmount > 5
        ) {


            setAmounIsValid(false);
            return;
        }
        props.onAddToCart(enteredCurrentAmount);

    };
    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <InputComp label='Amount'
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+Add</button>
            {!amountIsValid && <p> Please enter the correct amount</p>}

        </form>

    );
};


export default MealItemForm;