import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const searchInputRef = useRef();

    useEffect(() => {
        searchInputRef.current.addEventListener('click', (event) => {
          event.stopPropagation();
          ulRef.current.style.display = 'flex';
          onInputChange(event);
        });
        document.addEventListener('click', (event) => {
          ulRef.current.style.display = 'none';
        });
      }, []);

    // useEffect(() => {
    //     const API_URL = 'https://my.api.mockaroo.com/phonebook.json?key=9ac1c5f0'
    //     axios
    //         .get(API_URL)
    //         .then(res => {
    //             const contacts = res.data
    //             setContacts(contacts)
    //         })
    // }, [])

    return (
        <section className="search-top-box">
            <div className="search-bar">
                <input
                    type="text"
                    id="text-search"
                    name="s"
                    placeholder="Search keyword ..."
                    value={search}
                    className="form-control"
                    ref={searchInputRef}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </section>
    )
};

export default SearchBar;