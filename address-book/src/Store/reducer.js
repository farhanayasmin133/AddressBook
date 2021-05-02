// Initial persons state
const initialState = {
    persons: [
        {
            id: 'hdfhiuw',
            name: 'John Doe',
            address: '200, Queen St N, Kitchener, Canada, N2H2H6',
            showAddress: false
        },
        {
            id: '2922ghj',
            name: 'John Legend',
            address: '110, King St N, Waterloo, Canada, N2A2B6',
            showAddress: false
        },
        {
            id: 'sgey19',
            name: 'Jason Larry',
            showAddress: false
        },
        {
            id: '298whd',
            name: 'Carry Shuler',
            address: '500, Ottawa St N, Saskatoon, Canada, S2M2C6',
            showAddress: false
        }
    ]
};

/**
 * Creating a reducer to manipulate states
 * @param {*} state previous state
 * @param {*} action contains action type and payload if exists
 */
const reducer = (state = initialState, action) => {

    if (action.type === 'PERSON_CLICKED') {
        //Updating state immutably without directly manipulating the state
        const persons = [...state.persons];
        const personClickedIndex = persons.findIndex(person => {
            return person.id === action.id;
        });
        const person = persons[personClickedIndex];
        person.showAddress = !person.showAddress;
        persons[personClickedIndex] = person;
        return {
            ...state,
            persons: persons
        };
    }
    return state;
};

export default reducer;