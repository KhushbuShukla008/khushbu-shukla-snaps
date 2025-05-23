import React from "react";
import { Link } from "react-router-dom";
import FilterButton from "../FilterButton/FilterButton";
import "./NavHeader.scss";

function NavHeader({drawerOpen, setDrawerOpen, isHomePage}) {
  return (
    <div className="app__nav-container" >
      <Link to="/" className="app__header-link">
      <h1 className="app__header">Snaps</h1>
      </Link>
      <div className="app__filter">
      <FilterButton 
      drawerOpen={drawerOpen} 
      setDrawerOpen={setDrawerOpen} 
      isHomePage={isHomePage} />
    </div>
    </div>
  );
}

export default NavHeader;