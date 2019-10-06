import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

// Redux selectors
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

// Styles
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        { /* Cart items list header */ }
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

        { /* Cart items */ }
        {
            cartItems.map(cartItem => <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />)
        }

        { /* Total */ }
        <div className='total'>
            <span>TOTAL: ${ total }</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
