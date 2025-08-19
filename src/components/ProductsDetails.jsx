import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { MdAutorenew } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams(); // URL থেকে id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h2 className="text-center py-10">Loading...</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side - Images */}
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-lg shadow-lg"
        />
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-24 h-24 object-cover rounded-lg border hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      {/* Right Side - Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
        <p className="text-gray-600 mt-3">{product.description}</p>

        <h3 className="text-2xl text-red-600 mt-5 font-semibold">
          ${product.price}
        </h3>
        <p className="text-gray-700 mt-2">Stock: {product.stock}</p>
        <p className="text-yellow-600 mt-1">Rating: ⭐ {product.rating}</p>
        <p className="text-blue-600 mt-1">Brand: {product.brand}</p>
        <p className="text-green-600 mt-1">Category: {product.category}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            <FaCartPlus /> Add to Cart
          </button>
          <button className="flex items-center gap-2 bg-gray-200 text-black px-5 py-2 rounded-lg hover:bg-gray-300 transition">
            <FaHeart /> Wishlist
          </button>
          <button className="flex items-center gap-2 bg-gray-200 text-black px-5 py-2 rounded-lg hover:bg-gray-300 transition">
            <MdAutorenew /> Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;