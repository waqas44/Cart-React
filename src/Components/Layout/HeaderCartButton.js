import React, { Fragment } from "react";
import Carticon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon} >
                <Carticon />
            </span>
            <span> Cart </span>
            <span className={classes.badge}>3</span>
        </button>
    );


};


export default HeaderCartButton;