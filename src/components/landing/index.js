import React, { Component } from "react";
import styled from 'styled-components';
import { Card } from "antd";

import { getAll } from "../../config/firebase";

import Container, { Col, ContainerFluid, VideoContainer } from "../base/layout";
import { Row } from 'reactstrap'
import Header from "../base/header";

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
    events: [{ title: 'Event name', date: '18 Jan 2019', place: 'The ocean' }, { title: 'Event name2', date: '18 Jan 2019', place: 'The ocean' }, { title: 'Event name3', date: '18 Jan 2019', place: 'The ocean' }]
  }
  componentDidMount = () => {
    // getAll('/recommend').once('value').then((snap) => {
    //   const recommends = Object.keys(snap.val())
    //   this.setState({ recommends, recommendLoading: false })
    // })
  }
  render() {
    const { recommends, playlists, recommendLoading, playlistLoading } = this.state

    return (
      <React.Fragment>
        <Container>
          {
            this.state.events.map((event, i) => {
              return (
                <Col xs={6} lg={4} className='py-3'>
                  <Card
                    hoverable
                    style={{ minWidth: 100, maxWidth: 300 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
