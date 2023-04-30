import React, { useState } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

function Searchbar({onSubmit}) {
    const [search, setSearch] = useState('');
    
    const handleChange = e => {
        setSearch(e.currentTarget.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (search.trim() === '') {
            return Notify.failure('Value cannot be an empty string!');
        }
        onSubmit(search);
        setSearch('');
    };

    return (
        <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handleSubmit}>
            <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
            </button>
            <input
            className={css.input}
            type="text"
            name="search"
            onChange={handleChange}
            value={search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </form>
        </header>
    );
    };  

    Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    };
    
export default Searchbar;




