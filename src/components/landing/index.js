import React, { Component } from "react"
import styled from 'styled-components'
import { Card } from "antd"
import { isNull } from "util"

import { getAll } from "../../config/firebase"

import Container, { Col, ContainerFluid, VideoContainer } from "../base/layout"
import Header from "../base/header"
import { SubHeader, Content } from "../base/text"

export default class LandingIndex extends Component {
  state = {
    events: [{ title: 'Event name', date: '18 Jan 2019', place: 'The ocean' }, { title: 'Event name2', date: '18 Jan 2019', place: 'The ocean' }],
    eventsLoading: true
  }
  componentDidMount = () => {
    getAll('/events').once('value').then((snap) => {
      const data = snap.val()
      if (!isNull(data)) {
        const events = Object.values(snap.val())
        console.log(events)
        this.setState({ events, eventsLoading: false })
      }
    })
  }
  render() {
    const { events, eventsLoading } = this.state

    return (
      <React.Fragment>
        <Container>
          <Col>
            <Header>เหมาะกับคุณ</Header>
          </Col>
          {
            this.state.events.map((event, i) => {
              return (
                <Col xs={6} lg={4} className='py-3'>
                  <Card
                    loading={eventsLoading}
                    hoverable
                    style={{ minWidth: 100, maxWidth: 300 }}
                    cover={event.coverImage ? <img src={event.coverImage} /> : null}
                  >
                    <SubHeader>{event.eventName}</SubHeader>
                    <Content>{event.date}</Content>
                  </Card>
                </Col>
              )
            }
            )
          }

        </Container>
      </React.Fragment>
    )
  }
}
