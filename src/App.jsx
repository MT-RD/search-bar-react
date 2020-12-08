import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App container mt-2 mb-3">
      <h1>Search Bar Dropdown</h1>
      <SearchBar />
    </div>
  );
}

export default App;
