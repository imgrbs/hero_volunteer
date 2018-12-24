import React from 'react';
import styled from 'styled-components'
import { Button as DefaultButton } from 'reactstrap';

const Button = ({ children, onClick }) => (
    <DefaultButton onClick={onClick}>
        { children }
    </DefaultButton>
);

export const ButtonPrimary = styled(DefaultButton)`
`

export default Button;