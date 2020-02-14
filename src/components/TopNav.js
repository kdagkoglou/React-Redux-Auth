import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './TopNav.css';

class TopNav extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <ul className="navbar-nav float-lg-right">
          <li className="nav-item"><Link to="/feature" className="nav-link">My Profile</Link></li>
          <li className="nav-item"><Link to="/signout" className="nav-link">Sign Out</Link></li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav float-lg-right">
          <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
          <li className="nav-item"><Link to="/signup" className="nav-link">Sign Up</Link></li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">My Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs" className="nav-link">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link to="/talents" className="nav-link">Talents</Link>
            </li>
          </ul>
          {this.renderLinks()}
        </div>
      </nav>
    );
  }

}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps) (TopNav);
