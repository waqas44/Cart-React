import CartContext from "./Cart-context";





const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {


    }

    const removeItemToCartHandler = (id) => {


    }


    const cartcontext = {

        itmes: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: (id) => removeItemToCartHandler

    }

    return (
        <CartContext.Provider value={cartcontext}>{props.children} </CartContext.Provider>


    );

};

export default CartProvider