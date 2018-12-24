import React, { Component } from 'react'

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
              <h3>{event.eventName}</h3>
              <h6>วันที่: <b>{event.date} | เวลา: {event.startTime} - {event.endTime} น.</b></h6>
              <h6>สถานที่ {event.location}</h6>

              <h6 className='mt-3'>รายละเอียดงาน</h6>
              <p>{event.description}</p>

              <h6>สิ่งที่คาดว่าะได้รับ</h6>
              <p>{event.requirement}</p>

              <h6>ความต้องการทีมงานเฉพาะด้าน</h6>
              <h1>{event.coreTeam}</h1>

              <h1>จำนวนผู้เข้าร่วม</h1>
              <h1>{event.staffs}</h1>

              <h4>ผู้จัดงาน</h4>
              <h5>{event.organizer}</h5>
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