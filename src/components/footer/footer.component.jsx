import React from 'react';

// Styles
import { FooterContainer, LinkText } from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <p>
            Feel free to view the source code on
            <LinkText href='https://github.com/scottgilmoredev/e-commerce-react'>&nbsp;GitHub.</LinkText>
        </p>
    </FooterContainer>
);

export default Footer;
