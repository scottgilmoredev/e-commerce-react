import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// Redux
import { signUpStart } from '../../redux/user/user.actions';

// Styles
import './sign-up.styles.scss';

/**
 * Display and manage the sign-up form.
 */
class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    };

    /**
     * Handle form input data change.
     * @param {Object} event - synthetic event.
     */
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    /**
     * Create new user.
     * @param {Object} event - synthetic event.
     */
    handleSubmit = async event => {
        event.preventDefault();

        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        console.log('crab in my shoe mouth');

        signUpStart({ displayName, email, password });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with you email and password</span>

                <form className='sign-up-form' onSubmit={ this.handleSubmit }>
                    { /* Display name */ }
                    <FormInput
                        name='displayName'
                        type='text'
                        label='Name'
                        value={ displayName }
                        required
                        onChange={ this.handleChange }
                    />

                    { /* Email */ }
                    <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        value={email}
                        required
                        onChange={ this.handleChange }
                    />

                    { /* Password */ }
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        value={password}
                        required
                        onChange={ this.handleChange }
                    />

                    { /* Confirm password */ }
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={ confirmPassword }
                        required
                        onChange={ this.handleChange }
                    />

                    { /* Submit */ }
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
