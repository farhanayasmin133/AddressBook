import React from 'react';
//importing connect as a named export to connect AddressBook component to Redux store
import { connect } from 'react-redux';
import Person from '../../components/Person/Person';

/**
 * Creating the addressbook container that displays a list of persons.
 */
const addressBook = (props) => {
    let persons = null;
    if (props.persons) {
        persons = props.persons.map(person => {
            return <Person
                key={Person.id}
                clicked={() => props.onPersonClicked(person.id)}
                name={person.name}
                address={person.address}
                showAddress={person.showAddress}
            />
        });
    }

    return (
        <div>
            {persons}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    };
}
// Dispatching actions
const mapDispatchToProps = dispatch => {
    return {
        onPersonClicked: id => dispatch({ type: 'PERSON_CLICKED', id: id })
    }
}
// Connecting AddressBook component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(addressBook);