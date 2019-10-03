import React from 'react';
import './menu-item.styles.scss'

/**
 * Display a menu item.
 * Menu items contain an image, a title, and a sub-title.
 * @param {String} imageUrl - the url for the image.
 * @param {String} size - menu item size.
 * @param {String} title - menu item title.
 */
const MenuItem = ({ imageUrl, size, title }) => (
    <div className={`menu-item ${size}`}>
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

export default MenuItem;
