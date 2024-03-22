import React from 'react'

const SearchBox = ({filter, onChangeFilter}) => {
    return (
        <div>
            <h2>Find contacts by name</h2>
            <input type="text" value={filter} onChange={onChangeFilter}/>
        </div> 
    )
}

export default SearchBox