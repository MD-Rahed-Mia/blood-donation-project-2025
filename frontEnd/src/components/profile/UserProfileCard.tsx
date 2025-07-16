import React from "react";
import Avatar from "../../assets/themes/images/avtar/16.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function UserProfileCard() {
  return (
    <div>
      <div className="card social-profile shadow-lg">
        <div className="card-body">
          <div className="social-img-wrap">
            <div className="social-img">
              <img className="img-fluid" src={Avatar} alt="profile" />
            </div>
            <div className="edit-icon">
              <svg>
                <use href="../assets/svg/icon-sprite.svg#profile-check"></use>
              </svg>
            </div>
          </div>
          <div className="social-details">
            <h5 className="mb-1">
              <a href="social-app.html">Johan Deo</a>
            </h5>
            <span className="f-light">@deo.johan</span>
            <ul className="card-social">
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
            </ul>
            <ul className="social-follow">
              <li>
                <h4 className="mb-0">500</h4>
                <span className="f-light">Posts</span>
              </li>
              <li>
                <h4 className="mb-0">8.0k</h4>
                <span className="f-light">Followers</span>
              </li>
              <li>
                <h4 className="mb-0">570</h4>
                <span className="f-light">Following</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
