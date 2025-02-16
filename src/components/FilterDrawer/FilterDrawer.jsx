import Tag from "../Tag/Tag";

const FilterDrawer = ({
  tags,
  selectedTag,
  setSelectedTag,
  setCount,
  drawerOpen,
}) => {
  return (
    <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
      {/* filter list */}
      <ul>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => {
              if (selectedTag === tag) {
                setSelectedTag(null);
              } else {
                setSelectedTag(tag);
              }
            }}
          >
            <Tag
              tag={tag}
              isClickable
              selectedTag={selectedTag}
              setCount={setCount}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDrawer;
