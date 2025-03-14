import React from "react";


const CategoryFilter = ({ categoryId, setCategoryId, categories}) => {


  return (
    <div>
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        className="w-full p-3 rounded-2xl bg-white shadow-md text-gray-800 cursor-pointer focus:outline-none appearance-none "
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.categoryId} value={category.categoryId}>
            {category.categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
