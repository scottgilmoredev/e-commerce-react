import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  createStructuredSelector} from 'reselect';
import { Route } from 'react-router-dom';

// Components
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Redux actions
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// Redux selectors
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

/**
 * Display and manage the shop page.
 * This component renders the CollectionOverview and CollectionPage components.
 */
class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    };

    render() {
        const { isCollectionFetching, isCollectionsLoaded, match } = this.props;

        return (
            <div className='shop-page'>
                { /* Collections Overview */ }
                <Route
                    exact
                    path={ `${ match.path }` }
                    render={(props) => (
                        <CollectionsOverviewWithSpinner
                            isLoading={ isCollectionFetching }
                            { ...props }
                        />
                    )}
                />

                { /* Collection Item Page */ }
                <Route
                    path={ `${ match.path }/:collectionId` }
                    render={(props) => (
                        <CollectionPageWithSpinner
                            isLoading={ !isCollectionsLoaded }
                            { ...props }
                        />
                    )}
                />
            </div>
        )
    };
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
