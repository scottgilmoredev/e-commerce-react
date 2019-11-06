import styled, { css } from 'styled-components';
import { githubSignInStart } from '../../redux/user/user.actions';

const buttonStyles = css`
    border: none;
    background-color: black;
    color: white;

    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    border: 1px solid black;
    color: black;

    &:hover {
      background-color: black;
      border: none;
      color: white;
    }
`;

const githubSignInStyles = css`
    background-color: black;
    color: white;

    &:hover {
        background-color: #f5f5f5;
        border: none;
        color: black;
    }

    @media screen and (max-width: 800px) {
        &:hover {
            background-color: black;
            color: white;
        }
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`;

const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    if (props.isGithubSignIn) {
        return githubSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    border-style: none;
    cursor: pointer;
    display: block;
    font-family: 'Open Sans Condensed';
    font-size: 15px;
    font-weight: bolder;
    height: 50px;
    justify-content: center;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    width: 100%;

    ${getButtonStyles}
`;
