import React from "react";
import ReactDOM from "react-dom";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import YahooStocks from "./YahooStocks";

const App = () => {
  return (<div>
    <YahooStocks />
    <div className="responsive-nav">
      <button className="menu-button fa-button"><FontAwesomeIcon icon={faBars} /></button>
      <h1 className="nav-title long">THE OAUL SHEET JOURNAL.</h1>
      <h1 className="nav-title abbr">OSJ</h1>
      <div className="nav-large-only nav-data">English | 01-Jun-2020 | Print | Video </div>
      <div>
        <div className="nav-large-only nav-categories">
          <span className="category-item">Home</span>
          <span className="category-item">World</span>
          <span className="category-item">World</span>
          <span className="category-item">U.S.</span>
          <span className="category-item">Politics</span>
          <span className="category-item">Economy</span>
        </div>
        <button className="fa-button"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
    </div>
    <hr />
  </div>)
}

ReactDOM.render(<App />, document.getElementById("root"));