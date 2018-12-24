import React, { Component } from "react";
import { isNull } from "util"
import Cookies from "js-cookie"

import firebase, { insert, getOne } from '../../config/firebase'

import { UserContext } from "../../context";

import Container, { Col } from "../base/layout";
import { FacebookButton } from "../base/button";
import Header from "../base/text";
import Icon from "../base/icon";

export default class LoginIndex extends Component {
  state = {

  }

  login = (e) => {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider).then(userAuth => {
      const uid = userAuth.user.uid
      const info = userAuth.additionalUserInfo
      const profile = info.profile;
      getOne(`/users`, uid).once("value").then(snap => {
        const user = snap.val()
        if (isNull(user)) {
          insert(`/users/${uid}`, {
            providerId: info.providerId,
            ...profile
          })
          if (user && user.profile) {
            const redirect = Cookies.get('redirect')
            if (redirect) {
              window.location.href = `/${redirect}`
            } else {
              window.location.href = '/'
            }
          } else {
            window.location.href = '/register'
          }
        }
        this.setState({ user })
        window.location.href = '/'
      })
    })
  }

  render() {
    return (
      <UserContext.Provider user={this.state.user}>
          <Container>
            <Col className='text-center'>
                <Header>
                  เข้าสู่ระบบ
                </Header>
              </Col>
            <Col className='text-center'>
              <FacebookButton className='px-5 py-2' onClick={e => this.login(e)}>
                <Icon type="facebook" />
                Login with Facebook
              </FacebookButton>
            </Col>
          </Container>
      </UserContext.Provider>
    );
  }
}
