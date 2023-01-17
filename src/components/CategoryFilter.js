import React from "react";

function CategoryFilter({ categories, onSelect, selectedCategory }) {
  const CategoryButtons = categories.map((category) => {
    const handleClick = () => {
      onSelect(category)
    }

    return (
      <button
        className={category === selectedCategory ? "selected" : null}
        key={category}
        onClick={handleClick}
      >{category}</button>
    )
  })



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CategoryButtons}
    </div>
  );
}

export default CategoryFilter;
