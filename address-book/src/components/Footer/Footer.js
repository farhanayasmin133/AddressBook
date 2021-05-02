import React from 'react';
import classes from './Footer.module.css';

/**
 * Creating the footer component
 */
const footer = (props) => (
    <footer className={classes.Footer}>
       {props.developer}
    </footer>    
);

export default footer;