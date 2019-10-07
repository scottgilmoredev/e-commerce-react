import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// Redux selectors
import { selectCollections } from '../../redux/shop/shop.selectors';

/**
 * Display the shop page.
 */
const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
