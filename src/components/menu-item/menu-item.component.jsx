import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

/**
 * Display a menu item.
 * Menu items contain an image, a title, and a sub-title.
 * @param {String} imageUrl - the url for the image.
 * @param {String} linkUrl - the url to link to.
 * @param {String} size - menu item size.
 * @param {String} title - menu item title.
 * @param {Object} history - react router dom history.
 * @param {Object} match - react router dom match.
 */
const MenuItem = ({ imageUrl, linkUrl, size, title, history, match }) => (
    <div
        className={`menu-item ${size}`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}    
    >
        <div
            className='background-image'
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='title'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
