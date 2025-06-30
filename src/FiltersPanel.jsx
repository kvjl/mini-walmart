import React from "react";

const FiltersPanel = () => {
  return (
    <div>
      <div className="flex flex-col w-50 border border-red-500">
        <button>Price</button>
        <button>Brand</button>
        <button>Fulfillment Speed</button>
        <button>Department</button>
      </div>
    </div>
  );
};

export default FiltersPanel;
