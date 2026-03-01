import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <>
      {/* Wrapper for both navbars */}
      <div className="fixed-top w-100">

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container-fluid">

            <Link to="/" className="navbar-brand">
              <h2 className="m-0 text-primary">SwiftMart</h2>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">

              <form className="d-flex ms-auto me-3">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search..."
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>

              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    Sign In / Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    Cart{" "}
                    <span className="badge bg-primary">
                      {cartItems.length}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Submenu */}
        <div className="bg-primary text-white">
          <div className="container">
            <ul className="nav justify-content-center flex-wrap py-2 m-0">
              <li className="nav-item"><Link to="/mobiles" className="nav-link text-white">Mobiles</Link></li>
              <li className="nav-item"><Link to="/computers" className="nav-link text-white">Computers</Link></li>
              <li className="nav-item"><Link to="/watch" className="nav-link text-white">Watches</Link></li>
              <li className="nav-item"><Link to="/men" className="nav-link text-white">Mens Wear</Link></li>
              <li className="nav-item"><Link to="/woman" className="nav-link text-white">Woman Wear</Link></li>
              <li className="nav-item"><Link to="/furniture" className="nav-link text-white">Furniture</Link></li>
              <li className="nav-item"><Link to="/kitchen" className="nav-link text-white">Kitchen</Link></li>
              <li className="nav-item"><Link to="/fridge" className="nav-link text-white">Fridge</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link text-white">Books</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link text-white">Speakers</Link></li>
              <li className="nav-item"><Link to="/" className="nav-link text-white">TV's</Link></li>
              <li className="nav-item"><Link to="/ac" className="nav-link text-white">AC</Link></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Page content spacing */}
      <div style={{ marginTop: "120px" }}></div>
    </>
  );
};

export default Navbar;