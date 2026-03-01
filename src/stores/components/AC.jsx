import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";

const AC = () => {
  const firstFourImages = acData.slice(0, 4);

  return (
    <div className="container my-4">
      {/* Title */}
      <div className="text-center mb-4">
        <h2>Air Condition</h2>
      </div>

      {/* Responsive Grid */}
      <div className="row gy-3 gx-3 justify-content-center">
        {firstFourImages.map((item, index) => (
          <div key={index} className="col-11 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <Link to="/ac">
                <img
                  className="card-img-top img-fluid"
                  src={${import.meta.env.BASE_URL}${item.image}}
                  alt={`AC ${index + 1}`}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "200px"
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

export default AC;
