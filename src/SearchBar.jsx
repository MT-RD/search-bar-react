import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    const { onChange } = props;
    const searchInputRef = useRef();

    useEffect(() => {
        searchInputRef.current.addEventListener('click', (event) => {
          event.stopPropagation();
          onChange(event);
        });
        document.addEventListener('click', (event) => {
        });
      }, []);

    return (
        <section className="search-top-box">
            <div className="search-bar">
                <input
                    type="text"
                    id="text-search"
                    name="s"
                    placeholder="Search keyword ..."
                    className="form-control"
                    ref={searchInputRef}
                    onChange={onChange}
                />
            </div>
        </section>
    )
};

export default SearchBar;