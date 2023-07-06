
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/Cart-context';
import { useContext } from 'react';

const MealItem = (props) => {

    const crtCtx = useContext(CartContext);


    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        crtCtx.additem({
            name: props.name,
            id: props.id,
            key: props.id,
            price: props.price,
            amount: amount


        })

    }

    return <li className={classes.meal}>
        <div>
            <h3> {props.name}</h3>
            <div className={classes.description}> {props.description} </div>
            <div className={classes.price} > {price}</div>
        </div>
        <div><MealItemForm id={props.id} onAddToCart={addToCartHandler} /> </div>
    </li>


};


export default MealItem;