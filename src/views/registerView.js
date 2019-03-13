/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Register from '../components/auth/Register';
import registerAction from '../actions/registerAction';

export class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      admin: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message === 'New user added') {
      window.location.assign('/login', 200);
    }
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.registerAction(this.state);
  }

  render() {
    const { error } = this.props;
    return (
      <div>
        <Register onChange={this.handleChange} error={error} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.authReducer.error,
  message: state.authReducer.message,
});

export default connect(mapStateToProps, { registerAction })(RegisterView);
