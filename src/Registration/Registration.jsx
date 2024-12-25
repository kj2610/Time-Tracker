import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const RegistrationForm = () => {
  return (
    <section className="h-100 gradient-form " style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                {/* Left Section */}
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 background-color">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                    Google LLC is an American-based multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence (AI).
                    </p>
                  </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">Join The Google Team</h4>
                    </div>

                    <form>
                      <p>Create your account</p>

                      {/* Full Name Input */}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="fullName"
                          className="form-control"
                          placeholder="Enter your full name"
                        />
                        <label className="form-label" htmlFor="fullName">
                          Full Name
                        </label>
                      </div>

                      {/* Email Input */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter a valid email address"
                        />
                        <label className="form-label" htmlFor="email">
                          Email Address
                        </label>
                      </div>

                      {/* Password Input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>

                      {/* Confirm Password Input */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="confirmPassword"
                          className="form-control"
                          placeholder="Confirm your password"
                        />
                        <label className="form-label" htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <a href="/login" className="btn btn-outline-danger">
                          Login
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};