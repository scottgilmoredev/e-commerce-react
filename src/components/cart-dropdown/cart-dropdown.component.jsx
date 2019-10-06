import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Styles
import './cart-dropdown.styles.scss';

/**
 * Display the cart drop-down menu.
 * The drop-down menu displays a list of cart items and the 'Go to Checkout' button
 */
const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={ cartItem.id } item={ cartItem } />)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
