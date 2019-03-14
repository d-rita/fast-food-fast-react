/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/auth/Login';
import loginAction from '../actions/loginAction';


export class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (!nextProps.successState) {
      this.setState({
        loading: false
      });
    }
    if (nextProps.message === 'Logged in as admin') {
      localStorage.setItem('token', nextProps.token);
      window.location.assign('/admin', 200);
    } else if (nextProps.message === 'Logged in as client') {
      localStorage.setItem('token', nextProps.token);
      window.location.assign('/home', 200);
    }
  }

  handleChange(event) {
    event.preventDefault();
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginAction(this.state);
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3500);
  }

  render() {
    const { error } = this.props;
    return (
      <div>
        <Login
          onChange={this.handleChange}
          error={error}
          onSubmit={this.handleSubmit}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  successState: state.authReducer.isSuccessful,
  error: state.authReducer.error,
  message: state.authReducer.message,
  token: state.authReducer.token
});

export default connect(mapStateToProps, { loginAction })(LoginView);
