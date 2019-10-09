import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Components
import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

// Redux actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

/**
 * Display and manage the shop page.
 * This component renders the CollectionOverview and CollectionPage components.
 */
class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    };

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                { /* Collections Overview */ }
                <Route
                    exact
                    path={ `${ match.path }` }
                    component={ CollectionsOverviewContainer }
                />

                { /* Collection Item Page */ }
                <Route
                    path={ `${ match.path }/:collectionId` }
                    component={ CollectionPageContainer }
                />
            </div>
        )
    };
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
