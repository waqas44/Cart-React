import React, { Fragment, useContext } from "react";
import Carticon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from "../../Store/Cart-context";
const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberCartItems = cartCtx.items.reduce((curNumbr, item) => {

        return curNumbr + item.amount;

    }, 0);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon} >
                <Carticon />
            </span>
            <span> Cart </span>
            <span className={classes.badge}>{numberCartItems}</span>
        </button>
    );


};


export default HeaderCartButton;