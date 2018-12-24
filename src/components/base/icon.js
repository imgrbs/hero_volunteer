import React from 'react'
import styled from 'styled-components'
import { Icon as DefaultIcon } from 'antd'

import fonts from '../../config/fonts'

const Icon = styled(DefaultIcon)`
    font-size: ${fonts.icon};
`

export const IconInput = styled(DefaultIcon)`
    svg {
        color: rgb(0, 0, 0);
    }
`

export default Icon