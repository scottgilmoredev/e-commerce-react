import styled from 'styled-components';

export const LinkText = styled.a`
    color: #0366d6;
    cursor: pointer;
`;

export const SignInContainer = styled.div`
    margin-top: 1rem;
    text-align: center;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpTitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

// Display names.
LinkText.displayName = 'LinkText';
SignInContainer.displayName = 'SignInContainer';
SignUpContainer.displayName = 'SignUpContainer';
SignUpTitle.displayName = 'SignUpTitle';
SignUpTitleContainer.displayName = 'SignUpTitleContainer';
