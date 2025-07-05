import { Link } from "react-router";
import Logo from "../../assets/themes/images/logo/logo1.png";
import { useState } from "react";

function ResetPassword() {
  const [isShowPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="page-wrapper">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="login-card login-dark">
                <div>
                  <div>
                    <Link to={"/"} className="logo">
                      <img
                        className="img-fluid for-light m-auto"
                        src={Logo}
                        alt="looginpage"
                      />
                      <img
                        className="img-fluid for-dark"
                        src={Logo}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="login-main">
                    <form className="theme-form">
                      <h2>Reset Your Password</h2>
                      <div className="form-group">
                        <label className="col-form-label">New Password</label>
                        <div className="form-input position-relative">
                          <input
                            className="form-control"
                            type={isShowPassword ? "text" : "password"}
                            name="login[password]"
                            placeholder="*********"
                          />
                          <div
                            className="show-hide"
                            style={{ display: "block" }}
                            onClick={() => setShowPassword(!isShowPassword)}
                          >
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
                      <p className="mt-4 mb-0">
                        Don't have account?
                        <Link className="ms-2" to={"/sign-up"}>
                          Create Account
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
    </>
  );
}

export default ResetPassword;
