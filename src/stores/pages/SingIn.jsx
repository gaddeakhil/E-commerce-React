import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const defaultUser = {
    email: "gaddeakhil01@gmail.com",
    password: "12345",
  };

  const [users, setUsers] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  // LOGIN
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      const isDefaultUser =
        loginData.email === defaultUser.email &&
        loginData.password === defaultUser.password;

      const isRegisteredUser = users.find(
        (user) =>
          user.email === loginData.email &&
          user.password === loginData.password
      );

      if (isDefaultUser || isRegisteredUser) {
        navigate("/");
      } else {
        setError("Invalid email or password");
      }

      setLoading(false);
    }, 1500); // 1.5 sec buffer
  };

  // REGISTER
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const emailExists = users.find(
        (user) => user.email === registerData.email
      );

      if (!emailExists) {
        setUsers([...users, registerData]);
        setShowRegister(false);
      } else {
        setError("Email already registered");
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <div className="signin-wrapper">
        <div className="signin-card">
          <h2 className="text-center mb-3">Sign In</h2>

          {error && (
            <div className="alert alert-danger py-2 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
            />

            <input
              type="password"
              name="password"
              className="form-control mb-3"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />

            <button className="btn btn-primary w-100 mb-3" disabled={loading}>
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center">
            Don’t have an account?{" "}
            <span
              className="signup-link"
              onClick={() => {
                setError("");
                setShowRegister(true);
              }}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>

      {/* REGISTER MODAL */}
      {showRegister && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h4 className="text-center mb-3">Register</h4>

            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Full Name"
                value={registerData.name}
                onChange={handleRegisterChange}
                required
              />

              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />

              <input
                type="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />

              <div className="d-flex justify-content-between">
                <button className="btn btn-success" disabled={loading}>
                  {loading ? (
                    <span className="spinner-border spinner-border-sm"></span>
                  ) : (
                    "Submit"
                  )}
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setShowRegister(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .signin-wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f4f6f9;
        }

        .signin-card {
          width: 100%;
          max-width: 400px;
          background: #fff;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .signup-link {
          color: #0d6efd;
          cursor: pointer;
          font-weight: 500;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .modal-card {
          width: 100%;
          max-width: 420px;
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  );
};

export default SignIn;