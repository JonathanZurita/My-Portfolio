import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Modal from './Modal.jsx';

const Search = ({ onSearch, handleToolsDrop, handleContactInfoModal }) => {
    const [search, setSearch] = useState('');
    const [dropDown, setDropDown] = useState('')
    const [cartQTY, setCartQTY] = useState('');
    const [contactModal, setContactModal] = useState('');
    //cartQty, cartDropDown, searchDropdown, categoryDropdown, getSearchedCat, catChange,

    return (
        <div className="navWrapper" >
            {/* CATEGORY DROP DOWN */}
          <div className="leftSide">
            <span id="left" className="searchBtn1">
              <button  className="navBtn" onClick={() => handleToolsDrop()}>
                Toolbox
              </button>
            </span>

            <span id="left" className="searchBtn2">
            <button className="navBtn" onClick={() => handleToolsDrop()}>
                Projects
              </button>
            </span>

            <span id="left" className="searchBtn3" >
              <button className="navBtn" onClick={() => handleToolsDrop()}>
                About
              </button>
            </span>

            <span id="left" className="searchBtn4">
              <button  className="navBtn" onClick={() => handleContactInfoModal()}>
                Contact
              </button>
            </span>
          </div>
  
              {/* SEARCH BAR */}
          <span className="searchBarWrap">
            <form className="form" //onSubmit={(event) => getSearchedCat(event)}
            >
              <input
                //onClick={() => searchDropdown()}
                autoCorrect="off"
                autoComplete="off"
                className="search"
                //onChange={catChange}
                type="search"
                id="search"
                placeholder="Search"
                name="catName"
                value={search}
                aria-label="Search: suggestions appear below"
              />
              <span className="searchIcon">
                <span className="glyphicon glyphicon-search"/>
              </span>
            </form>
          </span>
      </div>
    )
}

export default Search;