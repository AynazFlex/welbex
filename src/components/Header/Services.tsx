import { FC } from "react";
import styled from "styled-components";

const ServicesElem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 630px) {
    display: none;
  }
`;

const ServiceElem = styled.div`
  text-align: right;
  & > h3 {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  & > h4 {
    margin: 6px 0 0 0;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

const ServiceMobile = styled.ul`
  display: none;
  margin: 20px 0 0 0;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #e4e5ea;
  padding: 0;

  & > li {
    display: flex;
    text-decoration: none;
    gap: 5px;
    align-items: center;

    &:before {
      content: "";
      display: block;
      box-sizing: border-box;
      height: 2px;
      width: 10px;
      background: linear-gradient(to right, #fcb045, #fd1d1d);
    }
  }

  @media (max-width: 630px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px 14px;
    justify-content: start;
  }
`;

const Services: FC = () => (
  <>
    <ServicesElem>
      <ServiceElem>
        <h3>Виджеты</h3>
        <h4>
          30 готовых
          <br />
          решений
        </h4>
      </ServiceElem>
      <ServiceElem>
        <h3>Dashboard</h3>
        <h4>
          с показателями
          <br />
          вашего бизнеса
        </h4>
      </ServiceElem>
      <ServiceElem>
        <h3>Skype Аудит</h3>
        <h4>
          отдела продаж
          <br />
          и CRM системы
        </h4>
      </ServiceElem>
      <ServiceElem>
        <h3>35 дней</h3>
        <h4>
          использования
          <br />
          CRM
        </h4>
      </ServiceElem>
    </ServicesElem>
    <ServiceMobile>
      <li>Skype аудит</li>
      <li>30 виджетов</li>
      <li>Dashboard</li>
      <li>Месяц аmoCRM</li>
    </ServiceMobile>
  </>
);

export default Services;
