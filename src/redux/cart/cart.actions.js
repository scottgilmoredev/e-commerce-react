import CartActionTypes from './cart.types';

export const addItem = item => ({
    payload: item,
    type: CartActionTypes.ADD_ITEM,
});

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
