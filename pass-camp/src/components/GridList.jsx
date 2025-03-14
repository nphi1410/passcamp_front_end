import React from "react";
import DataCard from "./DataCard";

const GridList = ({ dataList }) => {
  return (
    <div className="min-h-screen p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {dataList.map((data) => (
          <DataCard key={data.item.itemId} data={data.item} />
        ))}
      </div>
    </div>
  );
};

export default GridList;
