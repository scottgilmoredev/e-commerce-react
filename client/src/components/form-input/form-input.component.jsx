import React from 'react';

// Styles
import './form-input.styles.scss';

/**
 * Display a form input.
 * @param {Function} handleChange - onChange event handler.
 * @param {String} label - input label.
 * @param {Object} otherProps - name, type, required, value. 
 */
const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        { /* Input */ }
        <input className='form-input' onChange={handleChange} {...otherProps} />

        { /* Label */ }
        {
            label
                ? (
                    <label className={`form-input-label ${otherProps.value.length ? 'shrink' : ''}`}>
                        {label}
                    </label>
                )
                : null
        }
    </div>
);

export default FormInput;
