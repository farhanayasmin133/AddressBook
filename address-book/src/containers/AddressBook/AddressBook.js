import React, {Component} from 'react';
import {connect} from 'react-redux';
import Person from '../../components/Person/Person';
import Auxialiary from '../../hoc/Auxiliary/Auxiliary';

class AddressBook extends Component{

    render(){
        let persons=null;
        if(this.props.persons){
            persons = this.props.persons.map(person => {
                return <Person
                    key={Person.id}
                    clicked={() => this.props.onPersonClicked(person.id)}
                    name={person.name}
                    address={person.address}
                    showAddress={person.showAddress}
                 />
            });
        }
        
        return(
            <Auxialiary>
                 {persons}
            </Auxialiary>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons : state.persons
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonClicked: (id) => dispatch({type: 'PERSON_CLICKED', id:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddressBook);