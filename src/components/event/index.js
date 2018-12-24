import React, { Component } from 'react'

import { getOne } from '../../config/firebase';

import { UserContext } from '../../context'

import Header, { SubHeader, Highlight, Content } from '../base/text'
import Container, { ContainerFluid, Col } from '../base/layout'
import  { FixedButton } from '../base/button'
import Loading from '../base/loading';
import HorizontalLine from '../base/HorizontalLine';

class EventDetail extends Component {
  state = {
    event: {},
    loading: true,
  }

  getEventByUid = uid => {
    getOne('/events', uid).once("value").then((snapshot) => {
      const event = snapshot.val()
      this.setState({ event })
      this.setState({ loading: false })
    })

    return this.state.event
  }
  
  componentDidMount() {
    const { uid } = this.props.match.params
    if (uid) {
      this.getEventByUid(uid)
    } else {
      window.location.href = '/error'
    }
  }

  handleJoin = () => {
    const { uid } = this.props.match.params
    this.props.history.push(`/event/${uid}/confirm`)
  }

  render() {
    const { event, loading } = this.state
    return (
      <React.Fragment>
        <Loading isShow={loading} />
        <ContainerFluid>
          <Container>
            <Col>
              <img className='my-2 w-100' src="/static/image/staff.png" alt=""/>
            </Col>
            <Col>
              <Header>{event.eventName}</Header>
              <Highlight>วันที่: <b>{event.date || 'ยังไม่กำหนดวัน'} | เวลา: {event.startTime || 'ยังไม่กำหนดเวลาเริ่ม'} - {event.endTime|| 'ยังไม่กำหนดเวลาจบ'} น.</b></Highlight>
              <Highlight>สถานที่ {event.location}</Highlight>

              <SubHeader className='mt-3'>รายละเอียดงาน</SubHeader>
              <Content>{event.description}</Content>

              <SubHeader>สิ่งที่คาดว่าะได้รับ</SubHeader>
              <Content>{event.requirement}</Content>

              <SubHeader>ความต้องการทีมงานเฉพาะด้าน</SubHeader>
              {/* <Content>{event.coreTeam}</Content> */}

              <SubHeader>จำนวนผู้เข้าร่วม</SubHeader>
              {/* <Content>{event.staffs}</Content> */}
              <HorizontalLine />
              <Highlight>ผู้จัดงาน</Highlight>
              <Highlight>{event.organizer}</Highlight>
            </Col>
          </Container>
        </ContainerFluid>
        <FixedButton onClick={this.handleJoin} className='py-2'>เข้าร่วม</FixedButton>
      </React.Fragment>
    )
  }
}

const ComposeUserContext = ({...props}) => (
    <UserContext.Consumer>
    {
      ({ user }) => (
        <EventDetail user={user} {...props} />
      )
    }
  </UserContext.Consumer>
)

export default ComposeUserContext