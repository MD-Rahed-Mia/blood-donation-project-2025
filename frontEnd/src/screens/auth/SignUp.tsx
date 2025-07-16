import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import logoImage from "../../assets/themes/images/logo/logo1.png";
import instance from "../../config/axios";

interface SignType {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  agrement: boolean;
}

interface ErrorType {
  first_name: null | string;
  last_name: null | string;
  email: null | string;
  password: null | string;
  agrement: string | null;
}

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormdata] = useState<SignType>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    agrement: false,
  });
  const [error, setError] = useState<ErrorType>({
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    agrement: null,
  });
  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  function validate(): boolean {
    if (formData.first_name.length < 3) {
      setError((prev) => ({ ...prev, first_name: "Invalid first name." }));
      return false;
    } else if (formData.last_name.length < 3) {
      setError((prev) => ({ ...prev, last_name: "Invalid last name." }));
      return false;
    } else if (formData.email.length < 7) {
      setError((prev) => ({ ...prev, email: "Invalid Email." }));
      return false;
    } else if (formData.password.length < 8) {
      setError((prev) => ({
        ...prev,
        password: "Invalid Password. Minimum required 8 characters and more.",
      }));
      return false;
    } else if (formData.agrement !== true) {
      setError((prev) => ({
        ...prev,
        agrement: "Please check you are agree our terms.",
      }));
      return false;
    }

    return true;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setErrorResponse(null);
    e.preventDefault();
    setError({
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      agrement: null,
    });
    if (!validate()) {
      return;
    }

    try {
      const { data } = await instance.post(
        "/register",
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      console.log("There is an erro: ", error.message);
      if (error.response) {
        console.log("error: ", error.response.data.data?.email[0]);

        setErrorResponse(error.response.data.data?.email[0]);
      }
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  }

  function handleAgrement() {
    setFormdata((prev) => ({ ...prev, agrement: !prev.agrement }));
  }

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 p-0">
            <div className="login-card login-dark">
              <div>
                <div>
                  <a className="logo text-center" href="index.html">
                    <img
                      className="img-fluid for-light m-auto"
                      src={logoImage}
                      alt="looginpage"
                    />
                    <img
                      className="img-fluid for-dark"
                      src={logoImage}
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="login-main">
                  <form className="theme-form" onSubmit={handleSubmit}>
                    <h2 className="text-center">Create your account</h2>
                    <p className="text-center">
                      Enter your personal details to create account
                    </p>
                    {errorResponse && (
                      <h4 className="text-danger text-center">
                        {errorResponse}
                      </h4>
                    )}
                    <div className="form-group">
                      <label className="col-form-label pt-0">
                        Your Name
                        <span className="text-danger">
                          {error.first_name && error.first_name}
                        </span>
                      </label>
                      <div className="row g-2">
                        <span className="text-danger">
                          {error.last_name && error.last_name}
                        </span>

                        <div className="col-6">
                          <input
                            className={`form-control  ${
                              error.first_name !== null ? "border-danger" : null
                            }                          }`}
                            type="text"
                            required
                            placeholder="First name"
                            onChange={handleChange}
                            name="first_name"
                          />
                        </div>
                        <div className="col-6">
                          <input
                            className={`form-control  ${
                              error.last_name !== null ? "border-danger" : null
                            }                          }`}
                            type="text"
                            required
                            placeholder="Last name"
                            name="last_name"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">
                        Email Address{" "}
                        <span className="text-danger">
                          {error.email && error.email}
                        </span>
                      </label>
                      <input
                        className={`form-control  ${
                          error.email !== null ? "border-danger" : null
                        }                          }`}
                        type="email"
                        required
                        placeholder="Test@gmail.com"
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">
                        Password{" "}
                        <span className="text-danger">
                          {error.password && error.password}
                        </span>{" "}
                      </label>
                      <div className="form-input position-relative">
                        <input
                          className={`form-control  ${
                            error.password !== null ? "border-danger" : null
                          }                          }`}
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="*********"
                          onChange={handleChange}
                        />
                        <div
                          className="show-hide"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ display: "block" }}
                        >
                          <span className="show"></span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0 checkbox-checked">
                      <div className="form-check checkbox-solid-info">
                        <input
                          className="form-check-input"
                          id="solid6"
                          type="checkbox"
                          checked={formData.agrement}
                          onChange={handleAgrement}
                        />
                        <span className="text-danger">
                          {error.agrement && error.agrement}
                        </span>
                        <label className="form-check-label" htmlFor="solid6">
                          Agree with
                        </label>
                        <Link to={"/#"} className="ms-3 link">
                          Privacy Policy
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary btn-block w-100 mt-3"
                        type="submit"
                      >
                        Create Account
                      </button>
                    </div>
                    <div className="login-social-title">
                      <h6>Or Sign in with </h6>
                    </div>
                    <div className="form-group">
                      <ul className="login-social">
                        <li>
                          <a href="https://facebook.com" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="32"
                              height="32"
                              viewBox="0 0 48 48"
                            >
                              <linearGradient
                                id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                                x1="9.993"
                                x2="40.615"
                                y1="9.993"
                                y2="40.615"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#2aa4f4"></stop>
                                <stop offset="1" stop-color="#007ad9"></stop>
                              </linearGradient>
                              <path
                                fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                              ></path>
                              <path
                                fill="#fff"
                                d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.google.com" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="32"
                              height="32"
                              viewBox="0 0 48 48"
                            >
                              <path
                                fill="#fbc02d"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                              <path
                                fill="#e53935"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                              ></path>
                              <path
                                fill="#4caf50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                              ></path>
                              <path
                                fill="#1565c0"
                                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                              ></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p className="mt-4 mb-0 text-center">
                      Already have an account?
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
  );
}

export default SignUp;
