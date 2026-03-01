import React from "react";
import { useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <Navbar />

      <div className="container cart-container">
        <h2 className="text-center mb-4 y-cart">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-muted empty">Your Cart is Empty</p>
        ) : (
          <div className="row gy-4">
            {cartItems.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={item.image}
                    alt={item.product}
                    className="card-img-top"
                    style={{
                      objectFit: "contain",
                      height: "200px",
                      width: "100%",
                      backgroundColor: "#f8f9fa",
                      padding: "10px"
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.product}</h5>
                    <p className="card-text text-muted mb-1">{item.model}</p>
                    <h6 className="text-primary fw-bold mb-3">₹{item.price}</h6>
                    <button
                      className="btn btn-outline-danger mt-auto removeBtn"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Custom CSS */}
      <style>{`
        .cart-container {
          margin-top: 140px; /* Prevent overlap with fixed navbar + submenu */
          min-height: 70vh;
        }

        .y-cart {
          font-weight: bold;
          color: #0d6efd;
        }

        .empty {
          font-size: 1.2rem;
        }

        .removeBtn {
          transition: all 0.3s ease;
        }

        .removeBtn:hover {
          background-color: #dc3545;
          color: #fff;
        }

        /* Center empty state on small screens */
        @media (max-width: 576px) {
          .cart-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .row {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default UserCart;