import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Assets
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Components
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

// Redux selectors
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

// Styles
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionDiv,
} from './header.styles';

/**
 * Display the app header.
 */
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        { /* Logo */ }
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>

        { /* Nav Links: Shop, Contact, Sign Out, and Cart Icon */ }
        <OptionsContainer>
            <OptionDiv as={ Link } to='/shop'>SHOP</OptionDiv>
            <OptionDiv as={ Link } to='/contact'>CONTACT</OptionDiv>

            { /* Sign Out */ }
            {
                currentUser
                    ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    : <OptionDiv as={ Link } to='/signin'>SIGN IN</OptionDiv>
            }
    
            { /* Cart Icon */ }
            <CartIcon />
        </OptionsContainer>

        { /* Cart dropdown */ }
        { hidden ? null : <CartDropDown /> }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
