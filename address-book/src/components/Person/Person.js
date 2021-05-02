import React from 'react';
import classes from './Person.module.css';

const person = (props) =>{
    let address = null;
    if(props.showAddress){
        if(props.address){
            address = <p>Address: {props.address}</p>;
        }else{
            address = <p className={classes.Red}>Sorry, no address found for this person</p>;
        }
    }
    return(
        <div className={classes.Person}>
            <p onClick={props.clicked}>Name: {props.name}</p>
            {address}
        </div>
    ); 
}

export default person;