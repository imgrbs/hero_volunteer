import React, { Component } from 'react'
import styled from 'styled-components'
import { Spin, Icon } from 'antd'

import colors from '../../config/colors'
import fonts from '../../config/fonts'

const LoadingContainer = styled.div`
    display: ${props => props.isShow ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 9999;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${colors.loading};
    font-size: ${fonts.header};
    color: ${colors.text};
`

const Loading = ({ isShow = false }) => (
    <LoadingContainer isShow={isShow} >
        <Icon type="loading" style={{ fontSize: fonts.header }} spin />
        Loading...
    </LoadingContainer>
)

export default Loading