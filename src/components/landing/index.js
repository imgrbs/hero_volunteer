import React, { Component } from "react";
import styled from 'styled-components';
import { Card } from "antd";

import { getAll } from "../../config/firebase";

import Container, { Col, ContainerFluid, VideoContainer } from "../base/layout";
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
          <Col>
            <Hero />
          </Col>
        </Container>
      </React.Fragment>
    );
  }
}
