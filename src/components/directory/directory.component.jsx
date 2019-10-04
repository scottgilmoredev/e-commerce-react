import React, { Component } from 'react';

// Components
import MenuItem from '../menu-item/menu-item.component';

// Styles
import './directory.styles.scss';

/**
 * Display the store menu items.
 */
class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl: 'shop/hats',
                    title: 'hats',
                },
                {
                    id: 2,
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl: 'shop/jackets',
                    title: 'jackets',
                },
                {
                    id: 3,
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl: 'shop/sneakers',
                    title: 'sneakers',
                },
                {
                    id: 4,
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    linkUrl: 'shop/womens',
                    size: 'large',
                    title: 'womens',
                },
                {
                    id: 5,
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    linkUrl: 'shop/mens',
                    size: 'large',
                    title: 'mens',
                }
            ],
        };
    }
 
    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;
