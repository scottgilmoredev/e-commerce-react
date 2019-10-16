import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// Components
import CartItem from '../cart-item/cart-item.component';

// Redux actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Redux selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Styles
import {
    CartDropdownButton,
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
} from './cart-dropdown.styles';

/**
 * Display the cart drop-down menu.
 * The drop-down menu displays a list of cart items and the 'Go to Checkout' button
 */
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        { /* Cart items */ }
        <CartItemsContainer>
            {
                cartItems.length
                    ? cartItems.map(cartItem => <CartItem key={ cartItem.id } item={ cartItem } />)
                    : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer>

        { /* Checkout button */ }
        <CartDropdownButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
