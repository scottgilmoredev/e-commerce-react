import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Components
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Firebase
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

// Redux actions
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

/**
 * Display and manage the shop page.
 * This component renders the CollectionOverview and CollectionPage components.
 */
class ShopPage extends Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    };

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div className='shop-page'>
                { /* Collections Overview */ }
                <Route
                    exact
                    path={ `${ match.path }` }
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} { ...props } />}
                />

                { /* Collection Item Page */ }
                <Route
                    path={ `${ match.path }/:collectionId` }
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} { ...props } />}
                />
            </div>
        )
    };
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
