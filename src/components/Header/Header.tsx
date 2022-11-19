import { FC } from "react";
import styled from "styled-components";
import { Ball_1, Ball_2, Ball_3, Ball_4 } from "./BackgroundHeader";
import Services from "./Services";

const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 94px;
  color: #e4e5ea;
  font-family: "Inter", sans-serif;
  font-style: normal;

  b {
    font-weight: 900;
    background: linear-gradient(92deg, #fcb045 27.14%, #ff3f78 121.36%), #e4e5ea;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 1172px) {
    padding: 20px 16px;
    margin-top: 80px;
  }

  @media (max-width: 720px) {
    padding: 40px 16px 59px;
    margin: 0px;
  }

  @media (max-width: 630px) {
    flex-direction: column;
    gap: 45px;
  }

  @media (max-width: 340px) {
    position: relative;
    overflow: hidden;
    background: radial-gradient(238.53% 189.02% at 3.2% 3.49%, rgba(255, 246, 233, 0.1) 0%, rgba(26, 29, 35, 0.1) 26.62%, rgba(26, 29, 35, 0.1) 52.1%, rgba(26, 29, 35, 0.01) 70.17%, rgba(26, 29, 35, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    backdrop-filter: blur(7.5px);
  }
`;

const LeftSideElem = styled.aside`
  font-weight: 400;

  & > h1 {
    font-size: 48px;
    line-height: 58px;
    margin: 0;

    @media (max-width: 720px) {
      font-size: 36px;
      line-height: 44px;
    }
  }

  & > h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 30px 0 0 0;
    font-size: 18px;
    line-height: 22px;

    @media (max-width: 720px) {
      margin: 15px 0 0 0;
    }
  }
`;

const RightSideElem = styled.aside`
  & > h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    margin: 15px 0 0 0;

    b {
      text-transform: uppercase;
    }

    @media (max-width: 720px) {
      margin: 10px 0 0 0;
    }

    @media (max-width: 630px) {
      margin: 0;
      text-align: left;
    }
  }
`;

const ButtonElem = styled.div`
  display: flex;
  margin: 61px 0 0 0;
  justify-content: flex-end;
  & > button {
    display: block;
    font-family: "Inter", sans-serif;
    font-style: normal;
    outline: none;
    border: none;
    background: #4077f3;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #e4e5ea;
    padding: 21px 35px;
    cursor: pointer;
  }

  @media (max-width: 1172px) {
    margin: 40px 0 0 0;
  }

  @media (max-width: 630px) {
    display: none;
  }
`;

const Header: FC = () => (
  <HeaderBlock>
    <LeftSideElem>
      <h1>
        Зарабатывайте
        <br />
        больше
        <br />
        <b>с WELBEX</b>
      </h1>
      <h2>
        Развиваем и контролируем
        <br />
        продажи за вас
      </h2>
    </LeftSideElem>
    <RightSideElem>
      <h2>
        Вместе с 
        <b>
          бесплатной
          <br />
          консультацией
        </b>{" "}
        мы дарим:
      </h2>
      <Services />
      <ButtonElem>
        <button>Получить консультацию</button>
      </ButtonElem>
    </RightSideElem>
    <Ball_1 />
    <Ball_2 />
    <Ball_3 />
    <Ball_4 />
  </HeaderBlock>
);

export default Header;
