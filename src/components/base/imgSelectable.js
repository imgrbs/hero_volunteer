import React from 'react'
import styled from 'styled-components'

export const Img = ({ selected, src, ...props }) => (
    <div {...props} >
        <img src={src} className={selected ? 'selected' : ''} />
        <div className={selected ? 'selected markSelected' : 'markSelected'}>
            <div className='text'></div>
        </div>
    </div>
)

export const ImgSelectable = styled(Img)`
    position: relative;
    width: 100%;
    color: rgba(20, 255, 20, 0);

    img {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
    }

    :hover {
        cursor: pointer;
    }

    .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .markSelected {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: #008b00;
    }

    .markSelected .selected {
        opacity: 1;
    }
    
    .selected {
        opacity: 0.6;
    }
`

