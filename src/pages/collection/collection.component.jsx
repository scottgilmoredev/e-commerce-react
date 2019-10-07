import React from 'react';
import { connect } from 'react-redux';

// Components
import CollectionItem from '../../components/collection-item/collection-item.component';

// Redux selectors
import { selectCollection } from '../../redux/shop/shop.selectors';

// Styles
import './collection.styles.scss';

/**
 * Display the collection page.
 * This component maps the items in a given collection
 * and renders them with the CollectionItem component
 * @param {Object} collection - collection of shop items.
 */
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            { /* Title */ }
            <h2 className='title'>{ title }</h2>

            { /* Items */ }
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={ item.id } item={ item } />)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
