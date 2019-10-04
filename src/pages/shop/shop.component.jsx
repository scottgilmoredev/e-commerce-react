import React, { Component } from 'react';

// Constants
import SHOP_DATA from './shop.data';

// Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

/**
 * Display and manage the shop page.
 */
class ShopPage extends Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
};

export default ShopPage;
