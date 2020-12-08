import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [search, setSearch] = useState('');

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
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </section>
    )
};

export default SearchBar;