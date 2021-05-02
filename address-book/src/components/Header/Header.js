import React from 'react';
import classes from './Header.module.css';
import HeaderImage from '../../assets/Images/address-book.png';

/**
 * Creating Header consisting an image and page description. h1 is 
 * used for the header text.
*/
const header = (props) => (
    <header className={classes.Header}>
        <img src={HeaderImage} alt="Address Book" className={classes.HeaderImage}/>
        <h1>{props.title}</h1>
    </header>
);

export default header;