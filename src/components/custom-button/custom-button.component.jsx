import React from 'react';

// Styles
import './custom-button.styles.scss';

/**
 * Display a custom button.
 * @param {String} children - button title.
 * @param {Object} otherProps - type.
 */
const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
);

export default CustomButton;
