/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Register = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-6">
        <img className="signup-img" alt="welcome burger" src="https://res.cloudinary.com/dianarita/image/upload/v1552405184/fastfoodfast/burger1.jpg" />
      </div>
      <div className="col-6 d-flex justify-content-center  login-div">
        <form onSubmit={props.onSubmit} id="registerUser">
          <fieldset>
            <h5 className="legend">Sign up here</h5>
            <div>
              <p className="text-danger">{props.error}</p>
            </div>
            <div className="form-group mt-3 mb-2">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user" /></span>
                </div>
                <input name="username" type="text" className="form-control" placeholder="Username" onChange={props.onChange} />
              </div>
            </div>
            <div className="form-group mb-2">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-envelope" /></span>
                </div>
                <input type="email" name="email" className="form-control" placeholder="Email Address" onChange={props.onChange} />
              </div>
            </div>
            <div className="form-group mb-2">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock" /></span>
                </div>
                <input name="password" className="form-control" type="password" placeholder="New Password" onChange={props.onChange} />
              </div>
            </div>
            <div className="form-group mb-2">
              <input type="checkbox" className="form-check-label" name="admin" onChange={props.onChange} />
              {' '}
              As Admin
            </div>
            <button type="submit" className="btn btn-primary">Create my account</button>
            <p className="mt-3 text-sm">
              Already have an account? &nbsp;
              <Link to="/login" className="login-link">
                Log In
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
);

export default Register;
