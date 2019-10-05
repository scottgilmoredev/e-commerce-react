import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Firebase
import { auth } from '../../firebase/firebase.utils';

// Assets
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Components
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

// Styles
import './header.styles.scss';

/**
 * Display the app header.
 */
const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        { /* Logo */ }
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        { /* Nav Links: Shop, Contact, Sign Out, and Cart Icon */ }
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>

            { /* Sign Out */ }
            {
                currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className='option' to='/signin'>SIGN IN</Link>
            }
    
            { /* Cart Icon */ }
            <CartIcon />
        </div>

        { /* Cart dropdown */ }
        { hidden ? null : <CartDropDown /> }
    </div>
);

const mapStateToProps = ({ cart: { hidden }, user: { currentUser } }) => ({
    currentUser,
    hidden,
});

export default connect(mapStateToProps)(Header);
