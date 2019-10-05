import React from 'react';

// Styles
import './custom-button.styles.scss';

/**
 * Display a custom button.
 * @param {String} children - button title.
 * @param {Boolean} inverted - whether or not button color is inverted.
 * @param {Boolean} isGoogleSignIn - whether or not button is Google Sign-In button.
 * @param {Object} otherProps - onClick, type.
 */
const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
    <button
        className={
            `custom-button
            ${inverted ? 'inverted' : ''}
            ${isGoogleSignIn ? 'google-sign-in' : ''}`
        }
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;
