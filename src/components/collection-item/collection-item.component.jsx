import React from 'react';

// Styles
import './collection-item.styles.scss';

/**
 * Display a collection item.
 * @param {String} id - item id.
 * @param {String} imageUrl - item image url.
 * @param {String} name - item name.
 * @param {String} price - item price.
 */
const CollectionItem = ({ id, imageUrl, name, price }) => (
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
    </div>
);

export default CollectionItem;
