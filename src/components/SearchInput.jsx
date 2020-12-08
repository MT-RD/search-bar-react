import React, { useState, useEffect } from "react";
import { getSuggestions } from "../server";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [responseData, setResponseData] = useState([]);


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
    <div>
      <p>SearchInput</p>
      <label>Search</label>
      <input
        type="text"
        value={search}
        name="search"
        placeholder="search"
        onChange={(e) => getSuggestion(e)}
      />

      {responseData.length > 0
        ? responseData.map((item, index) => <p key={index}>{item}</p>)
        : null}
    </div>
  );
};

export default SearchInput;
