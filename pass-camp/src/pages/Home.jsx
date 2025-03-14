import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import GridList from "../components/GridList";
import Search from "../components/Search";
import Header from "../components/Header";
import Paginate from "../components/Paginate";
import CategoryFilter from "../components/CategoryFilter";
import SortSelect from "../components/SortSelect";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Home = () => {
  const [triggerSearch, setTriggerSearch] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [sortType, setSortType] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch categories once on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setTriggerSearch(true);
    setCurrentPage(0);
  }, [categoryId, sortType]);

  useEffect(() => {
    if (triggerSearch) {
      fetchingData(searchTerm, categoryId, sortType, currentPage);
      setTriggerSearch(false);
    }
  }, [triggerSearch, searchTerm, categoryId, sortType, currentPage]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`, API_OPTIONS);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      if (data.response === "False") {
        setErrorMsg(data.error || "Failed to fetch categories");
        setCategories([]);
      } else {
        setCategories(data);
      }
    } catch (error) {
      setErrorMsg("Fetching categories error:" + error);
    }
  };

  const fetchingData = async (
    searchTerm,
    categoryId,
    sortType,
    currentPage
  ) => {
    setIsLoading(true);
    setErrorMsg("");

    try {
      const endpoint = `${API_BASE_URL}/item?page=${currentPage}&sortType=${sortType}&categoryId=${categoryId}${
        searchTerm ? `&name=${encodeURIComponent(searchTerm)}` : ""
      }`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      if (data.response === "False") {
        setErrorMsg(data.error || "Failed to fetch data");
        setDataList([]);
      } else {
        setDataList(data.content);
        setTotalPage(data.totalPages);
        console.log(data);
      }
    } catch (error) {
      setErrorMsg("Fetching data error:" + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div className="max-w-11/12 mx-auto px-4 py-10">
        <section className="p-1">
          <div className="px-6 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Search Input - Takes 2 cols on larger screens */}
            <div className="sm:col-span-2">
              <Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setTriggerSearch={setTriggerSearch}
                setCurrentPage={setCurrentPage}
              />
            </div>

            {/* Pagination */}
            <div>
              <Paginate
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
                setTriggerSearch={setTriggerSearch}
              />
            </div>

            {/* Category Filter */}
            <div>
              <CategoryFilter
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                categories={categories}
              />
            </div>

            {/* Sort Selection */}
            <div>
              <SortSelect sortType={sortType} setSortType={setSortType} />
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-6">
              <Spinner />
            </div>
          ) : errorMsg ? (
            <p className="text-red-500 text-center mt-4">{errorMsg}</p>
          ) : (
            <GridList dataList={dataList} />
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
