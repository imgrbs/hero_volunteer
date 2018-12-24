import React from 'react'
import styled from 'styled-components'

export const Img = ({ selected, src, ...props }) => (
    <div {...props} >
        <img src={src} className={selected ? 'selected' : ''} />
        <div className={selected ? 'selected markSelected' : 'markSelected'}>
            Marked
        </div>
    </div>
)

export const ImgSelectable = styled(Img)`
    width: 100%;
    color: rgba(0, 0, 0, 0);

    img {
        width: 100%;
        max-width: 280px;
    }

    :hover {
        cursor: pointer;
    }

    .markSelected {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }

    .markSelected .selected {
        opacity: 1;
    }
    
    .selected {
        opacity: 0.3;
    }
`

