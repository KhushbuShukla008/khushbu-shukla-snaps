import "./FilterButton.scss";
import React, {useState} from "react";
import { Link } from "react-router-dom";

function FilterButton({drawerOpen, setDrawerOpen, isHomePage}){
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if(setDrawerOpen){
    setDrawerOpen(!drawerOpen);
    }
  };
  if(isHomePage){
  return (
    <div className="filter-button-container">
    <button className={`app__filter-button ${isClicked ? "clicked" : "not-clicked"}`}
      onClick={handleClick}
    >
      <span>Filters</span>
      <svg
        className={`filter-icon ${isClicked ? "icon-clicked" : "icon-not-clicked"}`}
        width="15"
        height="11"
        viewBox="0 0 15 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.66667 10.5H8.33333C8.79167 10.5 9.16667 10.125 9.16667 9.66667C9.16667 9.20833 8.79167 8.83333 8.33333 8.83333H6.66667C6.20833 8.83333 5.83333 9.20833 5.83333 9.66667C5.83333 10.125 6.20833 10.5 6.66667 10.5ZM0 1.33333C0 1.79167 0.375 2.16667 0.833333 2.16667H14.1667C14.625 2.16667 15 1.79167 15 1.33333C15 0.875 14.625 0.5 14.1667 0.5H0.833333C0.375 0.5 0 0.875 0 1.33333ZM3.33333 6.33333H11.6667C12.125 6.33333 12.5 5.95833 12.5 5.5C12.5 5.04167 12.125 4.66667 11.6667 4.66667H3.33333C2.875 4.66667 2.5 5.04167 2.5 5.5C2.5 5.95833 2.875 6.33333 3.33333 6.33333Z" />
      </svg>
    </button>
    </div>
  );
} else {
  return (
    <Link to="/">
      <div className="home-link">
      <svg xmlns="http://www.w3.org/2000/svg" 
      width="21" 
      height="15"
      viewBox="0 0 21 15"
      fill="none"
      className="home-icon">
      <path d="M0.292892 6.7929C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65686 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819458 8.07107 0.428933C7.68054 0.038409 7.04738 0.038409 6.65685 0.428933L0.292892 6.7929ZM21 6.5L1 6.5L1 8.5L21 8.5L21 6.5Z" fill="#1E6655"/>
      </svg>
      <span>Home</span>
      </div>
    </Link>
  );
}
}

export default FilterButton;