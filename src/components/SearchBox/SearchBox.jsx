import React from 'react'
import css from './SearchBox.module.css'

const SearchBox = ({filter, onChangeFilter}) => {
    return (
        <div className={css.searchBox} >
            <p className={css.searchTitle}>Find contacts by name</p>
            <input className={css.searchInput} type="text" value={filter} onChange={onChangeFilter}/>
        </div> 
    )
}

export default SearchBox