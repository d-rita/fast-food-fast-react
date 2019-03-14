/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const Login = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6">
        <img className="signup-img" alt="welcome burger" src="https://res.cloudinary.com/dianarita/image/upload/v1552405188/fastfoodfast/subway.jpg" />
      </div>
      <div className="col-6 d-flex justify-content-center  login-div">
        <form onSubmit={props.onSubmit} id="loginUser">
          <fieldset>
            <h5 className="legend">Sign in here</h5>
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
                  <span className="input-group-text"><i className="fa fa-lock" /></span>
                </div>
                <input name="password" className="form-control" type="password" placeholder="New Password" onChange={props.onChange} />
              </div>
            </div>
            {props.loading ? <Loader /> : null}
            <button type="submit" className="btn btn-primary">Sign me in</button>
            <p className="mt-3 text-sm">
              Don&#39;t have an account? &nbsp;
              <Link to="/" className="login-link">
                Sign up
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
