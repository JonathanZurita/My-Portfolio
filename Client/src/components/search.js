import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Search = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const [dropDown, setDropDown] = useState('')
    const [cartQTY, setCartQTY] = useState('');
    //cartQty, cartDropDown, searchDropdown, categoryDropdown, getSearchedCat, catChange,

    return (
        <div className="navWrapper">
        <nav className="navBar">
  
          <span className="targetLogo">
            {/* make a LOGO IMAGE */}
           
          </span>
  
            {/* CATEGORY DROP DOWN */}
          <li className="leftSide">
            <span id="left" 
              className="category" 
              //onClick={() => categoryDropdown()}
              >
              <i className="fa fa-cogs" aria-hidden="true"></i>
              <select className="selectArrow"></select>
            </span>
            
              {/* on Mobile Delete options */}
            <span id="left"  className="deals">
            <i className="fa fa-folder" aria-hidden="true"></i>
              <select className="selectArrow"></select>
            </span>
            <span id="left" className="deleteOnMobile">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
              <select id="deleteOnMobile" className="selectArrow"></select>
            </span>
            <span id="left" className="deleteOnMobile"><i className="fa fa-address-book" aria-hidden="true"></i>
</span>
          </li>
  
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
      
            <li className="rightSide">
                      {/* user icon image */}
              <span className="userIcon">
                
              </span>
              {/* shopping cart image */}
              <span 
                className="shoppingCart"
                //onClick={() => cartDropDown()}
                >
                
                  <span 
                  //className="cartQty"
                  >{cartQTY}</span>
              </span>
          </li>
        </nav>
      </div>
    )
}

export default Search;