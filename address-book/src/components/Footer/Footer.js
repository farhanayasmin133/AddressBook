import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => (
    <footer className={classes.Footer}>
       {props.developer}
    </footer>    
);

export default footer;