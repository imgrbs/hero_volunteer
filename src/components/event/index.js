import React, { Component } from 'react'

import Header, { SubHeader, Highlight, Content } from '../base/text'
import Container, { ContainerFluid, Col } from '../base/layout'
import  { FixedButton } from '../base/button'

export default class EventDetail extends Component {
  render() {
    const { event } = this.props
    return (
      <React.Fragment>
        <ContainerFluid>
          <Container>
            <Col>
              <img className='my-2' src="/static/image/staff.png" alt=""/>
            </Col>
            <Col>
              <Header>{event.eventName}</Header>
              <Highlight>วันที่: <b>{event.date} | เวลา: {event.startTime} - {event.endTime} น.</b></Highlight>
              <Highlight>สถานที่ {event.location}</Highlight>

              <SubHeader className='mt-3'>รายละเอียดงาน</SubHeader>
              <Content>{event.description}</Content>

              <SubHeader>สิ่งที่คาดว่าะได้รับ</SubHeader>
              <Content>{event.requirement}</Content>

              <SubHeader>ความต้องการทีมงานเฉพาะด้าน</SubHeader>
              <Content>{event.coreTeam}</Content>

              <SubHeader>จำนวนผู้เข้าร่วม</SubHeader>
              <Content>{event.staffs}</Content>

              <Highlight>ผู้จัดงาน</Highlight>
              <Highlight>{event.organizer}</Highlight>
            </Col>
          </Container>
        </ContainerFluid>
        <FixedButton className='py-2'>เข้าร่วม</FixedButton>
      </React.Fragment>
    )
  }
}

EventDetail.defaultProps = {
  event: {
    eventName: 'ไม่มีชื่อกิจกรรมนี้',
    description: 'ไม่มีรายละเอียดกิจกรรม',
    requirement: 'ไม่มีสิ่งที่คาดว่าจะได้รับ',
    coreTeam: [],
    staffs: [],
    location: 'ไม่มีสถานที่',
    organizer: 'ไม่มีผู้จัด',
    date: '26 ม.ค. 2562',
    startTime: '06:00',
    endTime: '19:00',
  }
}