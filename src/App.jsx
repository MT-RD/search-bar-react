import React from 'react';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const onChange = (event) => {
    
  };

  return (
    <div className="App">
      <h1>Search Bar Dropdown</h1>
      <SearchBar onInputChange={onChange}/>
    </div>
  );
}

export default App;
