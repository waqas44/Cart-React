import classes from './Cart.module.css';
import Modal from '../../Components/UI/Modal';



const Cart = (props) => {
    const MealData = [{

        id: 'c1',
        name: 'sushi',
        amount: '12.12',
        description: ' good taste',
    }].map((item) => (<li>{item.name} </li>))
    const cartItems =
        <ul className={classes['cart-items']}>
            {
                MealData

            }
        </ul>;
    // const cartItems = (
    //     <ul className={classes['cart-items']}>
    //         {

    //         [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
    //             <li>{item.name}</li>
    //         ))

    //         }
    //     </ul>
    // );


    return (
        <Modal onClose={props.onClose}>

            {cartItems}
            <div className={classes['total']}>
                <span>Total Amount</span>
                <span>12.12 </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.close}>Order</button>


            </div>

        </Modal>

    );


};


export default Cart;