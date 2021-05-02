import React from 'react';
import classes from './Header.module.css';
import HeaderImage from '../../assets/Images/address-book.png';

const header = (props) => (
    <header className={classes.Header}>
        <img src={HeaderImage} alt="Address Book" className={classes.HeaderImage}/>
        <h1>{props.title}</h1> 
    </header>
);

export default header;