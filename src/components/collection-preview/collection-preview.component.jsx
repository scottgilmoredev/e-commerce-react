import React from 'react';

// Components
import CollectionItem from '../collection-item/collection-item.component';

// Styles
import './collection-preview.styles.scss';

/**
 * Display a preview of items (four) for the given collection.
 * @param {Array} items - list of collection items.
 * @param {String} title - collection title.
 */
const CollectionPreview = ({ items, title }) => (
    <div className='collection-preview'>
        { /* Title */ }
        <h1 className='title'>{title.toUpperCase()}</h1>

        { /* Collection items */ }
        <div className='preview'>
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
);

export default CollectionPreview;
