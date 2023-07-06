
import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === ADD) {
        const updatedItems = state.items.concat(action.item);//this will return new array after adding new itme
        const updateTotalAmount = state.totalAmount + action.item.amount * action.item.price;
        return {

            items: updatedItems,
            totalAmount: updateTotalAmount
        };

    }

    return defaultCartState;

};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: ADD, item: item });

    }

    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: REMOVE, id: id });

    }


    const cartcontext = {

        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler

    };

    return (
        <CartContext.Provider value={cartcontext}>{props.children} </CartContext.Provider>
    );

};

export default CartProvider