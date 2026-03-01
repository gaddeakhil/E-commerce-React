import React, { useState, useEffect } from "react";
import { fridgeData } from "../data/fridge";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const FridgePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // Show loading for 2 seconds
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
      ? fridgeData
      : fridgeData.filter((orange) => selectedProduct.includes(orange.brand));

  return (
    <>
      <Navbar />
      <div className="container my-4">
        {loading ? (
          // Loading animation
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
              <h5 className="mb-3 text-center text-md-start">Filter by Brand</h5>
              <div className="d-flex flex-column align-items-center align-items-md-start">
                {fridgeData.map((item, index) => (
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
                    <Link to={`/fridge/${item.id}`} className="text-decoration-none">
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

      {/* Custom CSS for better-looking checkboxes */}
      <style>{`
        .custom-checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid #0d6efd; /* thicker border */
          cursor: pointer;
        }
        .custom-checkbox:checked {
          background-color: #0d6efd; /* Bootstrap primary blue */
          border-color: #0d6efd;
        }
        .custom-checkbox:focus {
          box-shadow: 0 0 0 0.2rem rgba(13,110,253,.25);
        }
      `}</style>
    </>
  );
};

export default FridgePage;