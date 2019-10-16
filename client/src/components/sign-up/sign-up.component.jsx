import React, { useState } from 'react';
import { connect } from 'react-redux';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Redux
import { signUpStart } from '../../redux/user/user.actions';

// Styles
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

/**
 * Display the sign-up form.
 */
const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { displayName, email, password, confirmPassword } = userCredentials;

    /**
     * Handle form input data change.
     * @param {Object} event - synthetic event.
     */
    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    /**
     * Create new user on form sumbit.
     * @param {Object} event - synthetic event.
     */
    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with you email and password</span>

            <form onSubmit={ handleSubmit }>
                { /* Display name */ }
                <FormInput
                    name='displayName'
                    type='text'
                    label='Name'
                    value={ displayName }
                    required
                    onChange={ handleChange }
                />

                { /* Email */ }
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    required
                    onChange={ handleChange }
                />

                { /* Password */ }
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    required
                    onChange={ handleChange }
                />

                { /* Confirm password */ }
                <FormInput
                    name='confirmPassword'
                    type='password'
                    label='Confirm Password'
                    value={ confirmPassword }
                    required
                    onChange={ handleChange }
                />

                { /* Submit */ }
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </SignUpContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
