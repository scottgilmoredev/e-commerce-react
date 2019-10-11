import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import MenuItem from '../menu-item/menu-item.component';

// Redux selectors
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

// Styles
import './directory.styles.scss';

/**
 * Display the store menu items.
 */
const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
