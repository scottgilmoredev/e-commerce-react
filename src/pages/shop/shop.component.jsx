import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Components
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

// Firebase
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

// Redux actions
import { updateCollections } from '../../redux/shop/shop.actions';

/**
 * Display and manage the shop page.
 * This component renders the CollectionOverview and CollectionPage components.
 */
class ShopPage extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            console.log('cllectionsMap', collectionsMap);
            updateCollections(collectionsMap);
        });
    };

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
                <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
            </div>
        )
    };
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
