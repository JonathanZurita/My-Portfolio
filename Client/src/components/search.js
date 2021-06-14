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
        id="contactModal"
        aria-labeledby="leftBtn4"
        contactInfoModal={contactInfoModal}
        handleContactInfoModal={toggleContactInfoModal}
      />
      <nav className="navWrapper">
        {/* LEFT SIDE NAVIGATION */}
        <div aria-roledescription="navigation" className="leftSide">
          <button  
            className="leftButtonOption" 
            id="leftBtn1" 
            aria-expanded="false"
            onClick={() => toggleToolsDropModal()}
          >
            Toolbox
          </button>

          <NavLink  
            className="leftButtonOption"
            id="leftBtn2"
            role="link"
            to="/projects"
          >
            Projects
          </NavLink>

          <NavLink 
            role="link" 
            className="leftButtonOption"
            id="leftBtn3"
            to="/pics"
          >
            Hobbies
          </NavLink>

          <button 
            aria-expanded="false"
            aria-owns="contactModal"
            className="leftButtonOption" 
            id="leftBtn4"

            onClick={() => toggleContactInfoModal()}
          >
            Contact
          </button>
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
              placeholder="Search tool name..."
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

        <div role="button" className="home">
          <NavLink to="/">
            <button className="homeBtn">
              <i className="fas fa-grip-lines"></i>
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Search;
