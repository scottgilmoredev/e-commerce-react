import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Styles
import './header.styles.scss';

/**
 * Display the app header.
 */
const Header = () => (
    <div className='header'>
        { /* Logo */ }
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        { /* Nav Links: Shop, Contact */ }
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
);

export default Header;
