import React from 'react'
import styled from 'styled-components'

import fonts from '../../config/fonts'

const Header = styled.h1`
    font-size: ${fonts.header};
`

export default Header

export const SubHeader = styled.h2`
    font-size: ${fonts.subheader};
`

export const Highlight = styled.h3`
    font-size: ${fonts.highlight};
`

export const Content = styled.p`
    font-size: ${fonts.content};
`