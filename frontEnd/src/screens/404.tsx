import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        {/* <!-- error-400 start--> */}
        <div className="error-wrapper">
          <div className="container">
            <div className="svg-wrraper">
              <h1>404</h1>
            </div>
            <div className="col-md-8 offset-md-2">
              <h3>Page Not Found</h3>
              <p className="sub-content">
                The page you are attempting to reach is currently not available.
                This may be because the page does not exist or has been moved.
              </p>
              <Link className="btn btn-primary" to={"/"}>
                BACK TO HOME PAGE
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- error-400 end--> */}
      </div>
    </div>
  );
}

export default NotFound;
