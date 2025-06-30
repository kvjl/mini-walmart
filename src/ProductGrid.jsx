import React from "react";
import { products } from "./data/products";

const ProductGrid = () => {
  return (
    <div className="justify-center flex flex-wrap gap-4">
      {products.map((product) => (
        <div key={product.id} className="w-1/5  p-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 rounded object-contain"
          />
          <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-sm text-gray-500">Rating: {product.rating} ⭐</p>
          <p className="text-sm text-gray-500">
            Delivery: {product.delivery_eta}
          </p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            + Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
