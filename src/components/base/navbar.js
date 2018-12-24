import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { UserContext } from "../../context";

const Nav = styled.nav`
  background-color: #cc181e;
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
  }

  render() {
    const { logout } = this.props
    return (
      <UserContext.Consumer>
        {({user}) => (
          <Nav className="navbar navbar-expand-md navbar-dark fixed-top">
            <a className="navbar-brand" href="/">
              JoyJoin
            </a>
            <button
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
              className="collapse navbar-collapse"
              id="navbar"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              </ul>
              <div className="ml-auto text-white">
                {
                    user ? (
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link active" to={'/login'}>
                          Login
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <DropdownBox>
                        <div className="dropbtn">
                          <ProfileImage className='img-fluid rounded-circle' src={user.photoURL} alt="profile"/>
                          <span className='mx-3'>
                              { user.displayName }
                          </span>
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
