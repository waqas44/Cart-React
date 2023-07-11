import { useContext } from 'react';
import CartContext from '../../Store/Cart-context';
import classes from './Cart.module.css';
import Modal from '../../Components/UI/Modal';
import CartItem from './CartItem';



const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => { };
    const cartItemAddHandler = (item) => { };

    const cartItemsobj = (
        <ul className={classes['cart-items']}>
            {
                cartCtx.items.map((item) => (

                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.name}
                        amount={item.amount}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                    // <li>{item.name} </li>


                ))


            }
        </ul>);
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

            {cartItemsobj}
            <div className={classes['total']}>
                <span>Total Amount</span>
                <span>{totalAmount} </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.close}>Order</button>}


            </div>

        </Modal>

    );


};


export default Cart;