import { FC } from "react";
import styled from "styled-components";
import telegram from "../../assets/logo/telegram.svg";
import phone from "../../assets/logo/phone.svg";
import whatsapp from "../../assets/logo/whatsapp.svg";


const ContacsElem = styled.div<{device?: string}>`
  display: flex;
  margin: 15px 0 0 auto;
  color: #e4e5ea;
  & > span {
    display: block;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-right: 49px;
  }
  & > a {
    display: block;
    height: 16px;
    margin-right: 34px;

    & > img {
      display: block;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }

  @media (max-width: 690px) {
    ${({ device }) =>
      device === "mobile"
        ? {
            display: 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'center',
            gap: '15px',
            margin: '50px 0 0 0',
            '& > a': {
                margin: '0',
            },
            '& > span': {
                margin: '0',
            }
          }
        : { display: "none" }}
  }
`;

const Contacs: FC<{device?: string}> = ({device}) => (
    <ContacsElem device={device}>
        <span>+7 555 555-55-55</span>
        <a href="#">
          <img src={telegram} alt="telegram" />
        </a>
        <a href="#">
          <img src={phone} alt="phone" />
        </a>
        <a href="#">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </ContacsElem>
)


export default Contacs