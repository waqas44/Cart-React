import classes from './Cart.module.css';
import Modal from '../../Components/UI/Modal';



const Cart = (props) => {

    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                [{

                    id: 'c1',
                    name: 'sushi',
                    amount: '12.12',
                    description: ' good taste',
                }].map((item) => (<li>{item.name} </li>))

            }
        </ul>);



    return (
        <Modal>

            {cartItems}
            <div className={classes['total']}>
                <span>Total Amount</span>
                <span>12.12 </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.close}>Order</button>


            </div>

        </Modal>

    );


};


export default Cart;