import { useState } from "react";

import "./index.css";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import FiltersPanel from "./FiltersPanel";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex flex-row">
        <FiltersPanel></FiltersPanel>
        <ProductGrid></ProductGrid>
      </div>
    </>
  );
}

export default App;
