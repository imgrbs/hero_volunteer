import React from 'react'
import styled from 'styled-components'

import fonts from '../../config/fonts'
import colors from '../../config/colors'

const Header = styled.h1`
    font-size: ${fonts.header};
`

export default Header

export const Hero = styled.h1`
    font-size: ${fonts.hero};
`

export const HeroPrimary = styled(Hero)`
    color: ${colors.primary};
    font-weight: bold;
`

export const SubHeader = styled.h2`
    font-size: ${fonts.subheader};
`

export const Highlight = styled.h3`
    font-size: ${fonts.highlight};
`

export const Content = styled.p`
    font-size: ${fonts.content};
`