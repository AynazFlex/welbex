import styled from "styled-components";


export const Ball_1 = styled.div`
    display: none;
    position: absolute;
    width: 259px;
    height: 259px;
    right: -197px;
    top: 107px;
    background: #833AB4;
    opacity: 0.5;
    filter: blur(196px);
    z-index: -1;
    border-radius: 50%;

    @media (max-width: 340px) {
        display: block;
    }
`

export const Ball_2 = styled.div`
    display: none;
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    width: 211px;
    height: 210px;
    left: -55px;
    top: 241px;
    background: #961A1A;
    opacity: 0.5;
    filter: blur(196px);

    @media (max-width: 340px) {
        display: block;
    }
`

export const Ball_3 = styled.div`
    display: none;
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    width: 43px;
    height: 43px;
    left: 29px;
    top: 402px;
    background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);


    @media (max-width: 340px) {
        display: block;
    }
`

export const Ball_4 = styled.div`
    display: none;
    z-index: -1;
    border-radius: 50%;
    position: absolute;
    width: 40px;
    height: 40px;
    right: -16px;
    top: 236px;
    background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
    filter: blur(5px);
    backdrop-filter: blur(2px);

    @media (max-width: 340px) {
        display: block;
    }
`