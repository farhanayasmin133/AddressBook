import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import AddressBook from './containers/AddressBook/AddressBook';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Layout>
            <AddressBook />
          </Layout>
      </div>
    );
  }
}

export default App;