import React from 'react';
import Person from './Person/Person';


//prop persons
const persons = (props) =>props.persons.map(person => {
    return <Person
        clicked={() => props.clicked(person.id)}
        name={person.name}
        address={person.address}
        showAddress={person.showAddress}
     />
});

export default persons;