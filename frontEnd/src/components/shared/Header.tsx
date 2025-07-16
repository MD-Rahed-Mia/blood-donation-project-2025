import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/themes/images/logo/logo1.png";
import { CiMenuBurger } from "react-icons/ci";
import profileIcon from "../../assets/themes/images/profile.png";
import { PiCaretLeftBold } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router";
import useAuth from "../../context/useAuth";

function Header() {
  const HeaderSearch = () => {
    return (
      <form className="form-inline search-full col" action="#" method="get">
        <div className="form-group w-100">
          <div className="py-2 px-4 col-8 col-md-4 mx-auto rounded-5 mt-2 bg-light d-flex align-items-center justify-content-between">
            <input
              className="demo-input Typeahead-input form-control-plaintext w-100"
              type="text"
              placeholder="Search donor..."
              name="q"
              title=""
              autoFocus={true}
            />

            <FaSearch className="text-black text-lg" />
          </div>
          <div className="Typeahead-menu"></div>
        </div>
      </form>
    );
  };

  const HeaderMenus = () => {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    return (
      <div>
        <ul className="profile-body bg-white shadow-lg rounded-4 mt-2 me-4 position-absolute end-0 ">
          <li className="d-flex gap-2 px-3 py-2 ">
            <RiAccountCircleLine color="#308e87" size={20} />
            <Link to={"/profile"} className="ms-2">
              Account
            </Link>
          </li>
          <li className="d-flex gap-2 px-3 py-2 border-ligt border-top border-1">
            <IoMdNotificationsOutline size={20} color="#308e87" />
            <a className="ms-2" href="letter-box.html">
              Notification
            </a>
          </li>
          {user !== null ? (
            <li
              className="d-flex gap-2 px-3 py-2 border-ligt border-top border-1"
              onClick={() => logout()}
            >
              <CiLogout color="#308e87" size={20} />
              <a className="ms-2" href="#">
                Log out
              </a>
            </li>
          ) : (
            <li
              className="d-flex gap-2 px-3 py-2 border-ligt border-top border-1"
              onClick={() => {
                navigate("/login");
              }}
            >
              <CiLogout color="#308e87" size={20} />
              <a className="ms-2" href="#">
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  };

  const MenuContainer = () => {
    const [menu, setMenu] = useState(false);
    return (
      <>
        <div>
          <div
            onClick={() => setMenu(!menu)}
            className="d-flex gap-2  align-items-center justify-content-between px-2 py-1 "
            style={{
              cursor: "pointer",
            }}
          >
            <img
              src={profileIcon}
              alt=""
              style={{
                width: 30,
                height: 30,
                borderRadius: 40,
                objectFit: "cover",
                objectPosition: "center",
                border: "1px solid gray",
              }}
            />
            <div className="d-none d-md-block">
              <h3 className="h5">travis dacao</h3>
              <p className="h6 d-flex align-items-center   gap-3">
                <span>user</span>
                <span
                  style={{
                    transform: "rotate(180deg)",
                  }}
                >
                  <PiCaretLeftBold />
                </span>
              </p>
            </div>
          </div>

          {menu ? <HeaderMenus /> : null}
        </div>
      </>
    );
  };

  return (
    <div className="d-flex px-5 align-items-center sticky-top py-2 bg-white justify-content-between">
      {/* <img src={Logo} alt="Logo" className="px-4 d-none d-sm-none d-md-block" /> */}

      <div>
        <h1
          style={{
            fontWeight: "bolder",
            fontSize: 32,
            cursor: "pointer",
          }}
        >
          রক্ত{" "}
          <span
            style={{
              color: "red",
            }}
          >
            লাগবে
          </span>
        </h1>
      </div>
      <HeaderSearch />
      <div>
        <MenuContainer />
      </div>
    </div>
  );
}

export default Header;
