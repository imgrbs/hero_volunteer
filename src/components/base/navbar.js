import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import firebase from '../../config/firebase';
import colors from '../../config/colors';

import { UserContext } from "../../context";

const Nav = styled.nav`
  background-color: ${colors.white};
  box-shadow: 0px 3px 4px rgba(0,0,0,0.1);
`

const ProfileImage = styled.img`
  max-height: 40px;
  max-width: 40px;
`

const DropdownBox = styled.div`
  position: relative;
  display: inline-block;

  .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      min-width: 160px;
      z-index: 1;
  }

  .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
  }

  .dropdown-content a:hover { background-color: #ddd; }

  &:hover .dropdown-content { display: block; }
`

export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () =>  {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isOpen } = this.state
    const { logout } = this.props
    return (
      <UserContext.Consumer>
        {({user}) => (
          <Nav className="navbar navbar-expand-md navbar-light fixed-top">
            <a className="navbar-brand" href="/">
              <img src="/static/image/logo.png" alt=""/>
            </a>
            <button onClick={this.toggle}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className={`${!isOpen && 'collapse'} navbar-collapse`}
              id="navbar"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link onClick={this.toggle} className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              </ul>
              <div className="ml-auto text-white">
                {
                    !user ? (
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link onClick={this.toggle} className="nav-link active" to={'/login'}>
                          Login
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <DropdownBox>
                        <div className="dropbtn">
                          <ProfileImage className='img-fluid rounded-circle' src={user.photoURL} alt="profile"/>
                          <span className='mx-3 text-dark'>
                              { user.displayName }
                          </span>
                        </div>
                        <div className="dropdown-content">
                          <a href='/profile'>Profile</a>
                        </div>
                        <div className="dropdown-content">
                          <a href='/manage'>Create Event</a>
                        </div>
                        <div className="dropdown-content">
                          <a href='#'onClick={logout}>Logout</a>
                        </div>
                      </DropdownBox>
                    )
                }
              </div>
            </div>
          </Nav>
        )}
      </UserContext.Consumer>
    );
  }
}
