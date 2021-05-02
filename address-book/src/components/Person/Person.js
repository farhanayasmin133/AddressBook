import React from 'react';
import classes from './Person.module.css';

/**
 * Creating the person component. The component displays a person's name 
 * and shows/hides address when clicked on their names. If address does not
 * exist it shows an error message instead.
 */
const person = (props) => {
    let address = null;
    if (props.showAddress) {
        if (props.address) {
            address = <p>Address: {props.address}</p>;
        } else {
            address = <p className={classes.Red}>Sorry, no address for this name</p>;
        }
    }
    return (
        <div className={classes.Person}>
            <p onClick={props.clicked}>Name: {props.name}</p>
            {address}
        </div>
    );
}

export default person;