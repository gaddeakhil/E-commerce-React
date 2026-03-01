import React from "react";
import { acData } from "../data/ac";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const AcSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = acData.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container my-5 text-center">
          <h3 className="text-danger">Product not found</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Product Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="card shadow-sm border-0">
              <img
                src={product.image}
                alt={product.model}
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "350px",
                }}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="col-12 col-md-6">
            <h2 className="fw-bold text-primary">{product.company}</h2>
            <h4 className="text-muted">{product.model}</h4>
            <h3 className="text-success fw-bold my-3">₹{product.price}</h3>
            <p className="text-secondary">{product.description}</p>

            <button
              className="btn btn-primary btn-lg mt-3"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for styling */}
      <style>{`
        .card-img-top {
          border-radius: 8px;
        }
        button.btn-primary {
          transition: all 0.3s ease;
        }
        button.btn-primary:hover {
          background-color: #0b5ed7;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default AcSingle;