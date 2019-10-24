import styled from 'styled-components';

// Icons
import { ReactComponent as GitHubIconSVG } from '../../assets/Github.svg';
import { ReactComponent as LinkedInIconSVG } from '../../assets/Linkedin.svg';

export const ContactPageContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    &:nth-child(3) {
        margin: 1rem 0 0 0;
    }
`;

export const AvatarContainer = styled.div`
    border-radius: 50%;
    height: 200px;
    overflow: hidden;
    width: 200px;
`;

export const Avatar = styled.img`
    height: 335px;
    object-fit: cover;
    width: 100%;

    &:hover,
    &:active {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;

export const ContactText = styled.p`
    margin: 0;
    
    &:nth-child(3) {
        margin: 1rem 0 0 0;
    }
`;

export const ContactHeading = styled.h2`
    margin: 0 0.5rem 0.75rem 0.5rem;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    width: 75px;
`;

export const LinkedInIcon = styled(LinkedInIconSVG)`
    cursor: pointer;
    height: 30px;
    width: 30px;
`;

export const GitHubIcon = styled(GitHubIconSVG)`
    cursor: pointer;
    height: 30px;
    width: 30px;
`;

export const ContactDivider = styled.hr`
    border: 1px solid black;
    width: 165px;
`;

export const ContactSubtextContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 435px;
    width: 80%;
`;

export const ContactSubHeading = styled.h3`
    margin-bottom: 0;
`;

// Display names.
Avatar.displayName = 'Avatar';
AvatarContainer.displayName = 'AvatarContainer';
ContactDivider.displayName = 'ContactDivider';
ContactHeading.displayName = 'ContactHeading';
ContactPageContainer.displayName = 'ContactPageContainer';
ContactSubHeading.displayName = 'ContactSubHeading';
ContactSubtextContainer.displayName = 'ContactSubtextContainer';
ContactText.displayName = 'ContactText';
GitHubIcon.displayName = 'GitHubIcon';
IconContainer.displayName = 'IconContainer';
LinkedInIcon.displayName = 'LinkedInIcon';
