import React, { Component } from "react"
import { Card, Tag } from "antd"
import styled from 'styled-components'
import { Row } from 'reactstrap'
import { isNull } from "util"

import { getAll } from "../../config/firebase"

import Container, { Col } from "../base/layout"
import Header from "../base/text"
import { SubHeader, Content, Hero } from "../base/text"
import { ButtonPrimaryOutlined, ButtonPrimary } from "../base/button";


export default class LandingIndex extends Component {
  state = {
    events: [{ title: 'Event name', date: '18 Jan 2019', place: 'The ocean', types: [] }, { title: 'Event name2', date: '18 Jan 2019', place: 'The ocean', types: [] }, { title: 'Event name', date: '18 Jan 2019', place: 'The ocean', types: [] }, { title: 'Event name', date: '18 Jan 2019', place: 'The ocean', types: [] }],
    eventsLoading: true
  }
  componentDidMount = () => {
    getAll('/events').once('value').then((snap) => {
      const data = snap.val()
      if (!isNull(data)) {
        const keys = Object.keys(snap.val())
        let events = Object.values(snap.val())
        events = events.map((event, index) => ({ ...event, uid: keys[index] }))
        this.setState({ events, eventsLoading: false })
      }
    })
  }

  handleClick = eventUid => {
    this.props.history.push(`/event/${eventUid}`)
  }

  render() {
    const { events, eventsLoading } = this.state
    return (
      <React.Fragment>
        <div className='w-100' style={{ marginBottom: '20px' }}>
          <img src='/static/image/banner.png' style={{ width: '100%' }} />
        </div>
        <Container>

          <Col className='my-1'>
            <Header>เหมาะกับคุณ</Header>
            <p>แบ่งปันความรู้สึกดี ๆ จากสิ่งที่คุณชอบ</p>
          </Col>
          <Col key={0} xs={12} lg={12} className='py-3'>
            <Card
              loading={eventsLoading}
              hoverable
              style={{ minWidth: 100, maxWidth: 300 }}
              cover={this.state.events[0].coverImage ? <img src={this.state.events[0].coverImage} /> : null}
              onClick={e => this.handleClick(this.state.events[0].uid)}
            >
              <SubHeader>{this.state.events[0].eventName}</SubHeader>
              <Content>{this.state.events[0].date}</Content>
              {typeof this.state.events[0].types === 'string' ? null : this.state.events[0].types.map(type => (<Tag color='#EBE7E6' style={{ color: '#9A8D8A' }} className='py-1'>{type}</Tag>))}
            </Card>
          </Col>

          <Row className='px-3 py-5'>
            <div className='text-center' style={{ verticalAlign: 'middle', width: '280px', height: '50px', backgroundColor: '#F48572' }}>
              <Header style={{ lineHeight: '50px', color: 'white' }}>รับสมัครทีมหลัก (Core Team)</Header>
            </div>
            <Col className='my-1'>
              <SubHeader style={{ marginTop: '20px' }}>ร่วมกับผู้จัดเพื่อสร้างสรรค์งานให้ผู้ที่ต้องการคุณ</SubHeader>
            </Col>
            {
              this.state.events.map((event, i) => {
                return (
                  <Col key={i} xs={6} lg={4} className='py-3'>
                    <Card
                      loading={eventsLoading}
                      hoverable
                      style={{ minWidth: 100, maxWidth: 300 }}
                      cover={event.coverImage ? <img src={event.coverImage} /> : null}
                      onClick={e => this.handleClick(event.uid)}
                    >
                      <SubHeader>{event.eventName}</SubHeader>
                      <Content>{event.date}</Content>
                      {event.types.length <= 0 ? null : event.types.map(type => (<Tag color='#EBE7E6' style={{ color: '#9A8D8A' }} className='py-1'>{type}</Tag>))}
                    </Card>
                  </Col>
                )
              }
              )
            }
            <Col className='text-center'>
              <ButtonPrimaryOutlined style={{ width: '100%', height: '35px' }}>ดูงานทีมหลักเพิ่มเติม</ButtonPrimaryOutlined>
            </Col>
          </Row>

          <Row className='px-3 py-5'>
            <div className='text-center' style={{ verticalAlign: 'middle', width: '280px', height: '50px', backgroundColor: '#F48572' }}><Header style={{ lineHeight: '50px', color: 'white' }}>รับสมัครสตาฟงาน (Staff)</Header></div>
            <Col className='my-1'>
              <SubHeader style={{ marginTop: '20px' }}>ร่วมเป็นหนึ่งในร้อย สร้างสิ่งเล็กน้อยให้ยิ่งใหญ่</SubHeader>
            </Col>
            {
              this.state.events.map((event, i) => {
                return (
                  <Col key={i} xs={6} lg={4} className='py-3'>
                    <Card
                      loading={eventsLoading}
                      hoverable
                      style={{ minWidth: 100, maxWidth: 300 }}
                      cover={event.coverImage ? <img src={event.coverImage} /> : null}
                      onClick={e => this.handleClick(event.uid)}
                    >
                      <SubHeader>{event.eventName}</SubHeader>
                      <Content>{event.date}</Content>
                      {event.types.length <= 0 ? null : event.types.map(type => (<Tag color='#EBE7E6' style={{ color: '#9A8D8A' }} className='py-1'>{type}</Tag>))}
                    </Card>
                  </Col>
                )
              }
              )
            }
            <Col className='text-center'>
              <ButtonPrimaryOutlined style={{ width: '100%', height: '35px' }}>ดูงานสตาฟเพิ่มเติม</ButtonPrimaryOutlined>
            </Col>
          </Row>


        </Container>
        <div className='w-100 text-center py-5' style={{ marginBottom: '20px', backgroundImage: "url(\'/static/image/banner_create_event_soon.png\')" }}>
          <Hero className='py-5' style={{ color: '#FFFFFF' }}>
            ต้องการ "สร้าง" งานจิตอาสาให้แก่ผู้อื่น
            </Hero>
          <a href='/manage'>
            <ButtonPrimaryOutlined className='py-6' style={{ fontSize: '28px', lineHeight: '50px', width: '300px' }}>สร้างงานจิตอาสา</ButtonPrimaryOutlined></a>
        </div>
      </React.Fragment >
    )
  }
}
