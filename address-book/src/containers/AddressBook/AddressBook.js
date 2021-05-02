import React, {Component} from 'react';
import Persons from '../../components/Persons/Persons';

class AddressBook extends Component{
    state={
        persons:[
            {id:'hdfhiuw',
             name: 'John Doe', 
             address: '100, Queen St N, Kitchener, Canada, N2H2H6',
             showAddress:false
            },
            {id:'2922ghj',
             name: 'John Doe', 
             address: '100, Queen St N, Kitchener, Canada, N2H2H6',
             showAddress:false
            },
            {id:'sgey19',
             name: 'John Doe',
             showAddress:false
            },
            {id:'298whd',
             name: 'John Doe', 
             address: '100, Queen St N, Kitchener, Canada, N2H2H6',
             showAddress:false
            }
        ]
    }

    personClickHandler = (id) =>{
        const personClickedIndex = this.state.persons.findIndex(person =>{
            return person.id === id;
        } );

        const person = {...this.state.persons[personClickedIndex]};
        person.showAddress = !person.showAddress;
        const persons = [...this.state.persons];
        persons[personClickedIndex] = person;

        this.setState({persons: persons});
    }
    render(){
        
        return(
            <Persons persons={this.state.persons} clicked={this.personClickHandler}/>
        );
    }
}

export default AddressBook;