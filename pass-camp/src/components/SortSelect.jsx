import React, { useState } from "react";

const SortSelect = ({ sortType, setSortType }) => {
  const [totalTypes, setTotalTypes] = useState([]);

  return (
    <div>
      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        className="w-full p-3 rounded-2xl bg-white shadow-md text-gray-800 cursor-pointer focus:outline-none appearance-none "
      >
        <option value={""}>Sort by</option>
        {/* {totalTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))} */}
      </select>
    </div>
  );
};

export default SortSelect;
