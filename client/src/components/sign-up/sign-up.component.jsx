import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Redux
import { signUpStart } from '../../redux/user/user.actions';

// Styles
import { SignInAndSignUpContainer } from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.styles';
import {
    LinkText,
    SignInContainer,
    SignUpContainer,
    SignUpTitle,
    SignUpTitleContainer
} from './sign-up.styles';

/**
 * Display the sign-up form.
 */
const SignUp = ({ signUpStart, history }) => {
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
        <SignInAndSignUpContainer>
            <SignUpContainer>
                <SignUpTitleContainer>
                    <SignUpTitle>Welcome!</SignUpTitle>
                    <span>We just need a bit of info to create an account for you.</span>
                </SignUpTitleContainer>

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
                    <CustomButton type='submit'>Create Account</CustomButton>

                    { /* Sign in */ }
                    <SignInContainer>
                        Already have an account?
                        <LinkText onClick={() => history.push('/signin')}>
                            &nbsp;Login.
                        </LinkText>
                    </SignInContainer>
                </form>
            </SignUpContainer>
        </SignInAndSignUpContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUp));
