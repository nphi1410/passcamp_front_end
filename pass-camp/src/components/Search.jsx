import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = ({ searchTerm, setSearchTerm, setTriggerSearch, setCurrentPage }) => {

  const handleSearch = () => {
    setTriggerSearch(true);
    setCurrentPage(0);
  };
  return (
    <div className="flex items-center gap-3 p-3 bg-white shadow-md rounded-2xl ">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="lg"
        className="text-[#E9A885] cursor-pointer"
        onClick={() => handleSearch()}
      />
      <input
        type="text"
        placeholder="Search for an item..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
      />
    </div>
  );
};

export default Search;
