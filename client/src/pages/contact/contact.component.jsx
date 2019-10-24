import React from 'react';

// Assets
import avatar from '../../assets/super-gilmore-front.jpg';

// Styles
import {
    Avatar,
    AvatarContainer,
    ContactDivider,
    ContactHeading,
    ContactPageContainer,
    ContactSubHeading,
    ContactSubtextContainer,
    ContactText,
    GitHubIcon,
    IconContainer,
    LinkedInIcon,
} from './contact.styles';

export const ContactPage = () => (
    <ContactPageContainer>
        <h1>Hi! I'm Scott.</h1>

        { /* Avatar */ }
        <AvatarContainer>
            <Avatar src={ avatar } alt='profile image' />
        </AvatarContainer>

        <ContactText>Software Engineer</ContactText>

        <ContactHeading>Scott C. Gilmore</ContactHeading>

        <a href="mailto:scott.crawford.gilmore@gmail.com">scott.crawford.gilmore@gmail.com</a>

        { /* Social icons */ }
        <IconContainer>
            { /* Linked In */ }
            <a href='https://www.linkedin.com/in/scottcgilmore/'>
                <LinkedInIcon />
            </a>

            { /* Github */ }
            <a href='https://github.com/awesomescott'>
                <GitHubIcon />
            </a>
        </IconContainer>

        <ContactDivider />

        <ContactSubtextContainer>
            <ContactSubHeading>Like what you see?</ContactSubHeading>
            <ContactText>
                {
                    `This app was built to teach myself React. I hope you'll slide on over to my` +
                    `GitHub to view some of my other projects. If you like what I do, please get in touch.`
                }
            </ContactText>
        </ContactSubtextContainer>
    </ContactPageContainer>
);

export default ContactPage;
