import CartActionTypes from './cart.types';

export const addItem = item => ({
    payload: item,
    type: CartActionTypes.ADD_ITEM,
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
});

export const clearItemFromCart = item => ({
    payload: item,
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
});

export const removeItem = item => ({
    payload: item,
    type: CartActionTypes.REMOVE_ITEM,
});

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
