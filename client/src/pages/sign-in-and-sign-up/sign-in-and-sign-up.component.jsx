import React from 'react';

// Components
import SignIn from '../../components/sign-in/sign-in.component';

// Styles
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

/**
 * Display the SignIn and SignUp forms.
 */
const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignIn />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
