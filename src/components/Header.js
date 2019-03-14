import React from 'react';

class Header extends React.Component {
  handleLogOut = () => {
    localStorage.removeItem('token');
  };

  render() {
    const token = localStorage.getItem('token');
    const guestNav = (
      <nav className="navbar head-nav">
        <a className="navbar-brand" href="/home">Fast-Food-Fast</a>
        <a href="/login" className="login-btn p-2">Sign In</a>
      </nav>
    );
    const userNav = (
      <div>
        <nav className="navbar head-nav">
          <a className="navbar-brand" href="/home">Fast-Food-Fast</a>
        </nav>
        <nav className="user-nav">
          <ul>
            <li>
              <a href="/home">Menu</a>
            </li>
            <li>
              <a href="/my-orders">Orders</a>
            </li>
            <li>
              <a href="/home" onClick={this.handleLogOut}>Log out</a>
            </li>
          </ul>
        </nav>

      </div>
    );
    return (
      token ? userNav : guestNav
    );
  }
}

export default Header;
