import React from "react";
import { fridgeData } from "../data/fridge";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const FridgeSingle = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();

  const product = fridgeData.find((item) => item.id === id);

  return (
    <>
      <Navbar />

      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>

        <div className="ind-details space">
          <h2>{product.company}</h2>
          <h3>{product.model}</h3>
          <h2>{product.price}</h2>
          <p>{product.description}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          {/* 👇 THIS SHOWS COUNT */}
          <h4 style={{ marginTop: "15px", color: "green" }}>
            Items in Cart: {cartItems.length}
          </h4>
        </div>
      </div>
    </>
  );
};

export default FridgeSingle;