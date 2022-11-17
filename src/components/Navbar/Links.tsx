import { FC } from "react";
import styled from "styled-components";

const LinksElem = styled.ul<{ device?: string }>`
  display: flex;
  margin: 15px 0 0 0;
  padding: 0;
  gap: 30px;
  & > li {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    list-style-type: none;

    & > a {
      color: #e4e5ea;
      text-decoration: none;
      cursor: pointer;
    }
  }

  @media (max-width: 1000px) {
    margin: 0;
  }

  @media (max-width: 690px) {
    ${({ device }) =>
      device === "mobile"
        ? {
            "flex-direction": "column",
            'align-items': 'center',
            margin: '70px 0 0 0',
            gap: "10px",
          }
        : { display: "none" }}
  }
`;

const Links: FC<{ device?: string }> = ({device}) => (
  <LinksElem device={device}>
    <li>
      <a href="#">Услуги</a>
    </li>
    <li>
      <a href="#">Виджеты</a>
    </li>
    <li>
      <a href="#">Интеграции</a>
    </li>
    <li>
      <a href="#">Кейсы</a>
    </li>
    <li>
      <a href="#">Сертификаты</a>
    </li>
  </LinksElem>
);

export default Links;
