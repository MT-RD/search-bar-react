import React, { useState, useRef } from 'react';
import { getSuggestions } from '../server';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [responseData, setResponseData] = useState([]);

  const resultRef = useRef();
  const searchInputRef = useRef();

  const getSuggestion = (e) => {
    setSearch(e.target.value);

    const fetchData = async () => {
      let splittedData = search.split(" ");
      let lastWord = splittedData[splittedData.length - 1];
      const response = await getSuggestions(lastWord);
      setResponseData(response);
    };

    fetchData();
  };

  return (
    <section className="search-top-box">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          name="search"
          placeholder="search by keyword ..."
          className="form-control"
          ref={searchInputRef}
          onChange={(e) => getSuggestion(e)}
        />

        <ul id="results" className="list-group" ref={resultRef}>
          {responseData.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={(e) => {
                  searchInputRef.current.value = item;
                }}
                className="list-group-item list-group-item-action"
              >
                {item}
              </button>
            );
          })}
        </ul>

        {responseData.length > 0
          ? responseData.map((item, index) => <p key={index}>{item}</p>)
          : null}
      </div>
    </section>
  );
};

export default SearchBar;
