import styled from 'styled-components';

export const ButtonBarContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const LinkText = styled.a`
    color: #0366d6;
    cursor: pointer;
`;

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 800px) {
        width: unset;
    }
`;

export const SignInTitle = styled.h2`
    margin: 10px 0;
    text-align: center;
`;

export const SignUpContainer = styled.div`
    margin-top: 1rem;
    text-align: center;
`;

// Display names
ButtonBarContainer.displayName ='ButtonBarContainer';
LinkText.displayName = 'LinkText';
SignInContainer.displayName ='SignInContainer';
SignInTitle.displayName ='SignInTitle';
SignUpContainer.displayName = 'SignUpContainer';
