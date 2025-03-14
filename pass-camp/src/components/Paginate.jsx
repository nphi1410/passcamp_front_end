import React from "react";

const Paginate = ({
  currentPage,
  setCurrentPage,
  totalPage,
  setTriggerSearch,
}) => {
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setTriggerSearch(true);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage - 1) {
      setCurrentPage(currentPage + 1);
      setTriggerSearch(true);
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-5 justify-items-stretch space-x-1">
      {/* Previous Button */}
      <button
        className={`transition col-span-2 px-3 py-1 shadow-md active:shadow-none rounded-l-2xl rounded-r-sm ${
          currentPage === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#E9A885] text-white hover:bg-[#C08A6A]"
        }`}
        onClick={handlePrev}
        disabled={currentPage === 0}
      >
        Prev
      </button>

      {/* Current Page Numbers */}
      <button
        className={"px-4 py-1 shadow-md rounded-sm bg-[#E9A885] text-white"}
      >
        {currentPage + 1}
      </button>

      {/* Next Button */}
      <button
        className={`transition col-span-2 px-3 py-1 shadow-md active:shadow-none rounded-l-sm rounded-r-2xl ${
          currentPage === totalPage - 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#E9A885] text-white hover:bg-[#C08A6A]"
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPage - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
