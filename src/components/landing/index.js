import React, { Component } from "react";
import styled from 'styled-components';
import { Skeleton, Card } from "antd";
import { isNull } from "util"
import { Row } from 'reactstrap'

import { getAll } from "../../config/firebase";

import Container, { Col, ContainerFluid, VideoContainer } from "../base/layout";
import Header from "../base/header"
const { Meta } = Card;

const FluidStyled = styled(ContainerFluid)`
    background-color: #f1f1f1 !important;
`

const Hero = () => (
  <section className="jumbotron pt-4 py-3 text-center">
    <div className="container">
      <h1 className="jumbotron-heading">Hero</h1>
    </div>
  </section>
)

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
                    <p>{event.title}</p>
                    <p>{event.date}</p>
                    <p>{event.place}</p>
                  </Card>
                </Col>
              )
            }
            )
          }

        </Container>
      </React.Fragment>
    );
  }
}
