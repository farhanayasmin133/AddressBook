import React from 'react';

const initialState = {
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
};

const reducer = (state = initialState, action) => {

    if(action.type === 'PERSON_CLICKED'){
        const persons = [...state.persons];
        const personClickedIndex = persons.findIndex(person =>{
            return person.id === action.id;
        } );
        const person = persons[personClickedIndex];
        person.showAddress = !person.showAddress;
        persons[personClickedIndex] = person;
        return{
            ...state,
            persons:persons
        };
    }
    return state;
};

export default reducer;