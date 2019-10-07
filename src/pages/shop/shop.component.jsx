import React from 'react';
import { Route } from 'react-router-dom';

// Components
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

/**
 * Display the shop page.
 * This component renders the CollectionOverview and CollectionPage components.
 */
const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
        <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
    </div>
);

export default ShopPage;
