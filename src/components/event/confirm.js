import React, { Component } from 'react'

import firebase, { getOne, update } from '../../config/firebase';
import Container, { ContainerFluid, Col } from '../base/layout';
import Header from '../base/text';

export default class ConfirmRegister extends Component {
    state = {

    }
    
    getEventByUid = uid => {
        getOne('/events', uid).once("value").then((snapshot) => {
        const event = snapshot.val()
        this.setState({ event })
        this.setState({ loading: false })
        })

        return this.state.event
    }

    checkCoreTeamAmount = (coreTeamTypes, coreTeam) => {
        return false;
    }
    
    checkStaffsAmont = () => {
        return false;
    }

    handleJoin = () => {
        const { user } = this.props
        const { uid } = this.props.match.params
        const event =  this.getEventByUid(uid)
        const { isApproved, coreTeam = [], coreTeamTypes, staffs = [], maxStaff} = event
        const timestamp = firebase.database.ServerValue.TIMESTAMP
        if (!isApproved) {
        const newEvent = {
            ...event,
            coreTeam: [
            ...coreTeam,
            {
                userUid: user.uid,
                timestamp,
            }
            ]
        }
        this.updateEventByUid(uid, newEvent)
        } else {
        const newEvent = {
            ...event,
            staffs: [
            ...staffs,
            {
                userUid: user.uid,
                timestamp,
            }
            ]
        }
        this.updateEventByUid(uid, newEvent)
        }
    }

    updateEventByUid = (uid, value) => {
        update('/events', uid, value)
    }

  render() {
    return (
      <ContainerFluid>
        <Container>
            <Col>
                <Header>สมัครเข้าร่วมงาน</Header>
            </Col>
        </Container>
      </ContainerFluid>
    )
  }
}
