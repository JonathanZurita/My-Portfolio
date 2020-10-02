import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';
import { NavLink } from "react-router-dom";
import SearchSuggest from './searchSuggestions.jsx';

const Search = ({ onSearch, handleToolsDrop, handleContactInfoModal }) => {
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState('');
  const [data, setData] = useState([]);
  const [searchBool, setSearchBool] = useState(false);
  const handleSearch = () => {
    axios.get('/search', {params: {search: search}})
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }

  const toggleDrop = () => {
    if(searchBool) {
      setSearchBool(false)
      setModal('')
    } else {
      setModal(
        <div 
          className="modalWrap" 
          id="contactModal"
          onClick={() => toggleDrop()}
        ></div>
      );
      setSearchBool(true);
    }
  }

  const changeSearch = (val) => {
    setSearch(val);
    handleSearch();
  }
    return (
        <div className="navWrapper">

            {/* CATEGORY DROP DOWN */}
          <div className="leftSide">
            <span id="left" className="searchBtn1">
              <button  className="navBtn" onClick={() => handleToolsDrop()}>
                Toolbox
              </button>
            </span>

            <span id="left" className="searchBtn2">
            <NavLink className="navBtn" to="/projects">Projects</NavLink>

            </span>

            <span id="left" className="searchBtn3" >
            <NavLink className="navBtn" to="/pics">Hobbies</NavLink>
            </span>

            <span id="left" className="searchBtn4">
              <button  className="navBtn" onClick={() => handleContactInfoModal()}>
                Contact
              </button>
            </span>
          </div>

          {/* SEARCH BAR */}
          <span className="searchBarWrap" type="checkbox" >
            <form className="form">
              <input
                autoCorrect="off"
                autoComplete="off"
                className="search"
                onChange={(e) => changeSearch(e.target.value)}
                type="search"
                id="search"
                placeholder="Search for a tool or project..."
                name="catName"
                value={search}
                aria-label="Search: suggestions appear below"
              />
              <span className="searchIcon">
                <span className="glyphicon glyphicon-search"/>
              </span>
            </form>
          </span>
          <SearchSuggest toggleDrop={toggleDrop} searchWord={search} data={data} />
          <div className="home">
            <NavLink to="/">
              <button className="homeBtn" >
              <i className="fas fa-home"></i>
              </button>
            </NavLink>
          </div>
      </div>
    )
}

export default Search;