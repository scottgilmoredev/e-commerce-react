import React from 'react';

// Styles
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

/**
 * HOC to display a spinner while data is loading.
 * @param {Component} WrappedComponent - component to display once data is loaded.
 */
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading
        ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
        : <WrappedComponent { ...otherProps } />
};

export default WithSpinner;
