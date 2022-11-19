import styled from "styled-components";

export const PurpleBall = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 721px;
  top: -2px;
  z-index: -1;
  border-radius: 50%;

  background: radial-gradient(
    64% 64% at 27.25% 26.5%,
    rgba(236, 208, 255, 0.64) 0%,
    rgba(161, 93, 207, 0.24) 59.67%,
    rgba(118, 49, 164, 0.208) 78.59%,
    rgba(86, 24, 128, 0.232) 100%
  );
  box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
  filter: blur(5px);
  backdrop-filter: blur(2px);

  @media (max-width: 820px) {
    display: none;
  }
`;

export const RedBall = styled.div`
  position: absolute;
  width: 83px;
  border-radius: 50%;
  z-index: -1;
  height: 83px;
  left: 372px;
  top: 83px;
  background: radial-gradient(
      64% 64% at 27.25% 26.5%,
      rgba(255, 208, 208, 0.536) 0%,
      rgba(212, 93, 93, 0.264) 59.67%,
      rgba(167, 49, 49, 0.248) 78.59%,
      rgba(130, 25, 25, 0.248) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
  backdrop-filter: blur(2px);

  @media (max-width: 820px) {
    display: none;
  }
`;

export const RedBall_2 = styled.div`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 674px;
  top: 547px;
  border-radius: 50%;
  z-index: -1;

  background: radial-gradient(
      64% 64% at 27.25% 26.5%,
      rgba(255, 208, 208, 0.48) 0%,
      rgba(212, 93, 93, 0.248) 59.67%,
      rgba(167, 49, 49, 0.264) 78.59%,
      rgba(130, 25, 25, 0.232) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
  filter: blur(2.5px);
  backdrop-filter: blur(2px);

  @media (max-width: 820px) {
    display: none;
  }
`;

export const PurpleLightBall = styled.div`
  position: absolute;
  width: 259px;
  height: 259px;
  left: 465px;
  top: -154px;
  border-radius: 50%;
  z-index: -1;

  background: #833ab4;
  opacity: 0.5;
  filter: blur(196px);

  @media (max-width: 820px) {
    left: calc(100% - 300px);
  }

  @media (max-width: 340px) {
    display: none;
  }
`;

export const RedBall_3 = styled.div`
    position: absolute;
    width: 311px;
    height: 311px;
    left: -249px;
    border-radius: 50%;
    z-index: -1;
    top: 251px;
    background: #961A1A;
    opacity: 0.5;
    filter: blur(196px);

    @media (max-width: 340px) {
        display: none;
    } 
`