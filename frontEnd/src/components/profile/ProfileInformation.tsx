import React from "react";
import InputField from "../atoms/InputField";

function ProfileInformation() {
  return (
    <div>
      <form className="card">
        <div className="card-header card-no-border pb-0">
          <h3 className="card-title mb-0">Edit Profile</h3>
          <div className="card-options">
            <a
              className="card-options-collapse"
              href="#"
              data-bs-toggle="card-collapse"
            >
              <i className="fe fe-chevron-up"></i>
            </a>
            <a
              className="card-options-remove"
              href="#"
              data-bs-toggle="card-remove"
            >
              <i className="fe fe-x"></i>
            </a>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <InputField
                label="Username"
                type="string"
                placeholder="John doe bogde"
                onChange={(e) => console.log("e ", e.target.value)}
                disabled={true}
              />
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="mb-3">
                <InputField
                  label="Username"
                  type="string"
                  placeholder="John doe bogde"
                  onChange={(e) => console.log("e ", e.target.value)}
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Company"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Home Address"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="mb-3">
                <label className="form-label">Postal Code</label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="ZIP Code"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="mb-3">
                <label className="form-label">Country</label>
                <select className="form-control btn-square">
                  <option value="0">--Select--</option>
                  <option value="1">Germany</option>
                  <option value="2">Canada</option>
                  <option value="3">Usa</option>
                  <option value="4">Aus</option>
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div>
                <label className="form-label">About Me</label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Enter About your description"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-end">
          <button className="btn btn-primary" type="submit">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileInformation;
