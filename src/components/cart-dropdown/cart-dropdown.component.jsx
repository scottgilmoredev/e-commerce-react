import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// Components
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Redux selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Styles
import './cart-dropdown.styles.scss';

/**
 * Display the cart drop-down menu.
 * The drop-down menu displays a list of cart items and the 'Go to Checkout' button
 */
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        { /* Cart items */ }
        <div className='cart-items'>
            {
                cartItems.length
                    ? cartItems.map(cartItem => <CartItem key={ cartItem.id } item={ cartItem } />)
                    : <span className='empty-message'>Your cart is empty</span>
            }
        </div>

        { /* Checkout button */ }
        <CustomButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
