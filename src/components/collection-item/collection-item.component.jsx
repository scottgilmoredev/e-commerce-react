import React from 'react';
import { connect } from 'react-redux';

// Actions
import { addItem } from '../../redux/cart/cart.actions';

// Components
import CustomButton from '../custom-button/custom-button.component';

// Styles
import './collection-item.styles.scss';

/**
 * Display a collection item.
 * @param {Function} addItem - add item action.
 * @param {Object} item - id, imageUrl, name, price.
 */
const CollectionItem = ({ addItem, item }) => {
    const { imageUrl, name, price } = item;

    return (
        <div className='collection-item'>
            { /* Item image */ }
            <div
                className='image'
                style={{ backgroundImage: `url(${imageUrl})`}}    
            />

            { /* Item name / price */ }
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>

            { /* Add to cart */ }
            <CustomButton
                inverted
                onClick={() => addItem(item)}
            >
                Add to cart
            </CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
