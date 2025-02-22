import React from "react";
import FilterButton from "../FilterButton/FilterButton";
import "./NavHeader.scss";

function NavHeader({drawerOpen, setDrawerOpen, isHomePage}) {
  return (
    <div className="app__nav-container" >
      <h1 className="app__header">Snaps</h1>
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