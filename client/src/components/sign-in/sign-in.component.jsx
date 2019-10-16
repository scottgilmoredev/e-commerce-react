import React, { useState } from 'react';
import { connect } from 'react-redux';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Redux actions
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

// Styles
import {
    ButtonBarContainer,
    SignInContainer,
    SignInTitle,
} from './sign-in.styles';

/**
 * Display the sign-in form.
 */
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    /**
     * Handle form input data change.
     * @param {Object} event - synthetic event.
     */
    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    };

    /**
     * Handle form submit.
     * @param {Object} event - synthetic event.
     */
    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={ handleSubmit }>
                { /* Email */ }
                <FormInput
                    name='email'
                    type='email'
                    label='Email'
                    value={ email }
                    required
                    handleChange={ handleChange }
                />

                { /* Password */ }
                <FormInput
                    name='password'
                    type='password'
                    label='Password'
                    value={ password }
                    required
                    handleChange={ handleChange }
                />

                { /* Submit: Sign In, Sign In with Google */ }
                <ButtonBarContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        type='button'
                        isGoogleSignIn
                        onClick={ googleSignInStart }
                    >
                        Sign In with Google
                    </CustomButton>
                </ButtonBarContainer>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
    googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
