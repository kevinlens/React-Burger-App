import React from 'react'

import classes from './Toolbar.module.css'

const toolbar = (props) => (
    // A header is basically a <div> tag but reserved for, well, header
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            ...
        </nav>
    </header>

);
export default toolbar;