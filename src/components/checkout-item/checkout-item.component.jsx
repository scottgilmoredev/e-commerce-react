import React from 'react';
import { connect } from 'react-redux';

// Redux actions
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

// Styles
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, clearItem, removeItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            { /* Item image */ }
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>

            { /* Item name */ }
            <span className='name'>{ name }</span>

            { /* Item quantity */ }
            <span className='quantity'>
                { /* Decrease item quantity (left arrow) */ }
                <div
                    className='arrow'
                    onClick={() => removeItem(cartItem)}
                >
                    &#10094;
                </div>

                { /* Quantity value */ }
                <span className='value'>{ quantity }</span>

                { /* Increase item quantity (right arrow) */ }
                <div
                    className='arrow'
                    onClick={() => addItem(cartItem)}
                >
                    &#10095;
                </div>
            </span>

            { /* Price */ }
            <span className='price'>${ price }</span>

            { /* Remove item button */ }
            <span
                className='remove-button'
                onClick={() => clearItem(cartItem)}
            >
                &#10005;
            </span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
