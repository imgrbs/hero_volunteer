import React from 'react';
import styled from 'styled-components'
import { Button as DefaultButton } from 'antd';

import colors from '../../config/colors'
import fonts from '../../config/fonts'

const Button = ({ children, onClick }) => (
    <ButtonPrimary onClick={onClick}>
        { children }
    </ButtonPrimary>
);

export const ButtonPrimary = styled(DefaultButton)`
    background-color: ${colors.primary};
    height: auto;
`

export const FixedButton = styled(ButtonPrimary)`
    font-size: ${fonts.header};
    color: ${colors.white};
    border: none;
    position: fixed;
    border-radius: 15px;
    width: 100%;
    font-weight: bold;
    bottom: 0;
`


export default Button;