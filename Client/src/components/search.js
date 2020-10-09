import React, { useState, useEffect } from "react";
import axios from "axios";
import ToolsDrop from "./ToolsDropDown.js";
import { NavLink } from "react-router-dom";
import SearchSuggest from "./searchSuggestions.jsx";
import ContactModal from "./Modal.jsx";

const Search = ({ onSearch, handleToolsDrop, handleContactInfoModal }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchBool, setSearchBool] = useState(false);
  const [toolsDrop, setToolsDrop] = useState(false);
  const [contactInfoModal, setContactInfoModal] = useState(false);
  const handleSearch = () => {
    axios
      .get("/search", { params: { search: search } })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const toggleDrop = () => {
    if (searchBool) {
      setSearchBool(false);
      setModal("");
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
  };
  const toggleToolsDropModal = () => {
    if (toolsDrop) {
      setToolsDrop(false);
    } else {
      setToolsDrop(true);
    }
  };
  const toggleContactInfoModal = () => {
    if (contactInfoModal) {
      setContactInfoModal(false);
    } else {
      setContactInfoModal(true);
    }
  };

  const changeSearch = (val) => {
    setSearch(val);
    handleSearch();
  };
  
  return (
    <div>
      <div className="background" />
      <ToolsDrop toolsDrop={toolsDrop} handleToolsDrop={toggleToolsDropModal} />
      <ContactModal 
        contactInfoModal={contactInfoModal}
        handleContactInfoModal={toggleContactInfoModal}
      />
      <div className="navWrapper">
        {/* CATEGORY DROP DOWN */}
        <div className="leftSide">
          <span id="left" className="searchBtn1">
            <a className="navBtn" onClick={() => toggleToolsDropModal()}>
              Toolbox
            </a>
          </span>

          <span id="left" className="searchBtn2">
            <NavLink className="navBtn" to="/projects">
              Projects
            </NavLink>
          </span>

          <span id="left" className="searchBtn3">
            <NavLink className="navBtn" to="/pics">
              Hobbies
            </NavLink>
          </span>

          <span id="left" className="searchBtn4">
            <a className="navBtn" onClick={() => toggleContactInfoModal()}>
              Contact
            </a>
          </span>
        </div>

        {/* SEARCH BAR */}
        <span className="searchBarWrap" type="checkbox">
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
              <span className="glyphicon glyphicon-search" />
            </span>
          </form>
        </span>

        <SearchSuggest
          toggleDrop={toggleDrop}
          searchWord={search}
          data={data}
        />

        <div className="home">
          <NavLink to="/">
            <button className="homeBtn">
              <i class="fas fa-grip-lines"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Search;
