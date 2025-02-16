import FilterIcon from "../../assets/icons/Filter.svg";

function FilterButton({drawerOpen, setDrawerOpen}){
    return(
         <button className="app__filter-button"
          onClick={() => {
            setDrawerOpen(!drawerOpen);
          }}
        >
          <span>Filters</span>
          <img src={FilterIcon} className="filter-icon" />
        </button> 
    )
}

export default FilterButton;