import React from 'react'
import styled from 'styled-components'
import { Icon as DefaultIcon } from 'antd'

import { Col } from '../base/layout'
import { Highlight } from '../base/text'
import fonts from '../../config/fonts'
import colors from '../../config/colors';

const Icon = styled(DefaultIcon)`
    font-size: ${fonts.icon};
`

export const IconStyled = styled(Icon)`
    color: ${colors.primary};
`

export const IconInput = styled(DefaultIcon)`
    svg {
        color: rgb(0, 0, 0);
    }
`

export const IconWithText = ({ type, text }) => (
    (
        <React.Fragment>
            <Col className='my-2' xs={2}>
                <IconStyled type={type} />
            </Col>
            <Col className='my-2' xs={10}>
                <Highlight>{text}</Highlight>
            </Col>
        </React.Fragment>
    )
)

export default Icon