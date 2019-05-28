import React from 'react'
import './searchbar.css'


const SearchBar = props => {

    return (
        <form onSubmit={(e)=>props.filterPostHandler(e)}>
    <input className="search-bar" value={props.searchtext} onChange={props.changeHandler} placeholder="Search" name="searchtext" type="text" />
        </form>
    )
} 

export default SearchBar

