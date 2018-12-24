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
    border-radius: 15px;
    border: none;
`

export const ButtonPrimaryOutlined = styled(DefaultButton)`
    background-color: ${colors.white};
    color: ${colors.primary};
    border: 1px solid ${colors.primary} !important;
    height: auto;
    border-radius: 15px;
    border: none;
`

export const FixedButton = styled(ButtonPrimary)`
    font-size: ${fonts.header};
    color: ${colors.white};
    position: fixed;
    width: 100%;
    font-weight: bold;
    bottom: 0;
`

export const FacebookButton = styled(ButtonPrimary)`
    color: ${colors.white};
    background-color: ${colors.facebook};
    font-size: ${fonts.highlight};
`


export default Button;