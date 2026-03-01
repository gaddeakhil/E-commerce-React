import React, { useState, useEffect } from "react";
import { furnitureData } from "../data/furniture";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const FurniturePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? furnitureData
      : furnitureData.filter((item) =>
          selectedProduct.includes(item.brand)
        );

  return (
    <>
      <Navbar />

      {/* Main Container */}
      <div className="container my-4 furniture-page">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "3rem", height: "3rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-12 col-md-3 mb-4">
              <h5 className="mb-3 text-center text-md-start">
                Filter by Brand
              </h5>

              <div className="d-flex flex-column w-100 align-items-center align-items-md-start">
                {furnitureData.map((item, index) => (
                  <div key={index} className="form-check mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input custom-checkbox"
                      id={`brand-${index}`}
                      checked={selectedProduct.includes(item.brand)}
                      onChange={() => companyHandler(item.brand)}
                    />
                    <label
                      className="form-check-label fw-semibold"
                      htmlFor={`brand-${index}`}
                    >
                      {item.brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="col-12 col-md-9">
              <div className="row gy-4 gx-4">
                {filteredProduct.map((item) => (
                  <div key={item.id} className="col-6 col-md-4 col-lg-3">
                    <Link
                      to={`/furniture/${item.id}`}
                      className="text-decoration-none"
                    >
                      <div className="card h-100 shadow-sm">
                        <img
                          src={item.image}
                          alt={item.model}
                          className="card-img-top"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "200px",
                          }}
                        />
                        <div className="card-body text-center">
                          <h6 className="card-title mb-0">
                            {item.brand}, {item.model}
                          </h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS */}
      <style>{`
        /* Push page below fixed navbar */
        body {
          padding-top: 80px; /* adjust if navbar height differs */
        }

        /* Ensure full width filter container */
        .furniture-page .d-flex.flex-column {
          width: 100%;
        }

        /* Align checkbox + label */
        .form-check {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
        }

        /* Center on small screens */
        @media (max-width: 767px) {
          .form-check {
            justify-content: center;
          }
        }

        /* Left align on medium+ screens */
        @media (min-width: 768px) {
          .form-check {
            justify-content: flex-start;
          }
        }

        /* Custom Checkbox */
        .custom-checkbox {
          appearance: none;
          -webkit-appearance: none;
          width: 22px;
          height: 22px;
          border: 2px solid #0d6efd;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Straight horizontal line check */
        .custom-checkbox:checked::after {
          content: "";
          width: 12px;
          height: 2px;
          background-color: #0d6efd;
          position: absolute;
        }

        /* Focus effect */
        .custom-checkbox:focus {
          box-shadow: 0 0 0 0.2rem rgba(13,110,253,.25);
        }
      `}</style>
    </>
  );
};

export default FurniturePage;