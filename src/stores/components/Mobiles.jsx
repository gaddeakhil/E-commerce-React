import React from "react";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";

const Mobiles = () => {
  const firstFourImages = mobileData.slice(0, 4);

  return (
    <div className="container my-4">
      {/* Title */}
      <div className="text-center mb-4">
        <h2>Mobiles</h2>
      </div>

      {/* Responsive Grid */}
      <div className="row gy-3 gx-3 justify-content-center">
        {firstFourImages.map((item, index) => (
          <div key={index} className="col-11 col-md-4 col-lg-3">
            {/* Fixed card height so images fill box */}
            <div className="card h-100 shadow-sm" style={{ height: "250px" }}>
              <Link to="/mobiles">
                <img
                  className="card-img-top img-fluid"
                  src={${import.meta.env.BASE_URL}${item.image}}
                  alt={`Mobile ${index + 1}`}
                  style={{
                    objectFit: "cover",   // fills box edge-to-edge
                    width: "100%",
                    height: "100%"        // fills card height
                  }}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
