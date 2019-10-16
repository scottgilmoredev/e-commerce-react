import React from 'react';

// Components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// Styles
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

/**
 * Display the SignIn and SignUp forms.
 */
const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
