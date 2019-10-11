import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';

// Redux selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

// Styles
import './collections-overview.component';

/**
 * Display collections overview.
 * This component maps the collections and renders them with CollectionPreview component.
 * @param {Array} collections - list of collections.
 */
const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
