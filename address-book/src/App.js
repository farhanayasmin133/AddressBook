import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import AddressBook from './containers/AddressBook/AddressBook';

// Root component
function App() {
  return (
    <div className="App">
      <Layout>
        <AddressBook />
      </Layout>
    </div>
  );
}

export default App;