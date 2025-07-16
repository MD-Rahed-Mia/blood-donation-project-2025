import React from "react";
import Avatar from "../../assets/themes/images/avtar/16.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

function UserCard() {
  return (
    <div>
      <div className="card social-profile shadow-lg border-danger border-1">
        <div className="card-body">
          <div className="social-img-wrap">
            <div className="social-img">
              <img className="img-fluid" src={Avatar} alt="profile" />
            </div>
            <div className="edit-icon px-1 py-1 rounded-pill bg-white">
              <p
                style={{
                  fontWeight: "bolder",
                  fontSize: 17,
                  color: "red",
                }}
              >
                O+
              </p>
            </div>
          </div>
          <div className="social-details">
            <h5 className="mb-1">
              <a href="social-app.html">Johan Deo</a>
            </h5>
            <span className="f-light">@deo.johan</span>
            {/* <ul className="card-social">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://accounts.google.com/" target="_blank">
                  <FaGoogle />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagram />
                </a>
              </li>
            </ul> */}

            <div className="d-flex gap-2 align-items-center justify-content-center flex-wrap">
              <button className="bg-none px-3 py-1 text-info border-danger  rounded-pill">
                <span>
                  <IoCall color="red" className="mx-2" />
                </span>
                <span
                  style={{
                    color: "#00bc52",
                  }}
                >
                  call now
                </span>
              </button>
              <button className="bg-none px-3 py-1 text-info border-info rounded-pill">
                <span>
                  <IoLogoWhatsapp color="red" className="mx-2" />
                </span>
                <span
                  style={{
                    color: "#00bc52",
                  }}
                >
                  whatsapp
                </span>
              </button>
            </div>
            <ul className="social-follow">
              <li>
                <h4 className="mb-0">Total donate</h4>
                <h4 className="mb-0">4</h4>
              </li>
              <li>
                <h4 className="mb-0">Last donate</h4>
                <span className="f-light">30 June 2025</span>
              </li>
              <li>
                <h4 className="mb-0">Next donate</h4>
                <span className="f-light">30 August 2025</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
