import React from "react";
import { Link } from "react-router";
import Logo from "../../assets/themes/images/logo/logo1.png";

function ForgetPassword() {
  return (
    <div>
      <div className="page-wrapper">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="login-card login-dark">
                <div>
                  <div>
                    <Link className="logo" to={"/"}>
                      <img
                        className="img-fluid for-light m-auto"
                        src={Logo}
                        alt="looginpage"
                      />
                      <img className="for-dark" src={Logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="login-main">
                    <form className="theme-form">
                      <h2>Reset Your Password</h2>
                      <div className="form-group">
                        <label className="col-form-label">
                          Enter Your Mobile Number
                        </label>
                        <div className="row">
                          <div className="col-4 col-sm-3">
                            <input
                              className="form-control mb-1"
                              type="text"
                              value="+88"
                            />
                          </div>
                          <div className="col-8 col-sm-9">
                            <input
                              className="form-control mb-1"
                              type="number"
                              placeholder="000-0000-000"
                            />
                          </div>
                          <div className="col-12">
                            <div className="text-end">
                              <button
                                className="btn btn-primary btn-block m-t-10"
                                type="submit"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 mb-4">
                        <span className="reset-password-link">
                          If don't receive OTP?
                          <a className="btn-link text-danger" href="#">
                            Resend
                          </a>
                        </span>
                      </div>
                      <div className="form-group">
                        <label className="col-form-label pt-0">Enter OTP</label>
                        <div className="row">
                          <div className="col">
                            <input
                              className="form-control text-center opt-text"
                              type="text"
                              value="00"
                              maxLength={2}
                            />
                          </div>
                          <div className="col">
                            <input
                              className="form-control text-center opt-text"
                              type="text"
                              value="00"
                              maxLength={2}
                            />
                          </div>
                          <div className="col">
                            <input
                              className="form-control text-center opt-text"
                              type="text"
                              value="00"
                              maxLength={2}
                            />
                          </div>
                        </div>
                      </div>
                      <h6 className="mt-4 f-w-700">Create Your Password</h6>
                      <div className="form-group">
                        <label className="col-form-label">New Password</label>
                        <div className="form-input position-relative">
                          <input
                            className="form-control"
                            type="password"
                            name="login[password]"
                            required
                            placeholder="*********"
                          />
                          <div className="show-hide">
                            <span className="show"></span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">
                          Retype Password
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          name="login[password]"
                          required
                          placeholder="*********"
                        />
                      </div>
                      <div className="form-group mb-0 checkbox-checked">
                        <div className="form-check checkbox-solid-info">
                          <input
                            className="form-check-input"
                            id="solid6"
                            type="checkbox"
                          />
                          <label className="form-check-label" htmlFor="solid6">
                            Remember password
                          </label>
                        </div>
                        <button
                          className="btn btn-primary btn-block w-100 mt-3"
                          type="submit"
                        >
                          Done{" "}
                        </button>
                      </div>
                      <p className="mt-4 mb-0 text-center">
                        Already have an password?
                        <Link to={"/login"} className="ms-2">
                          Sign in
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
