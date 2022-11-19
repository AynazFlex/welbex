import { FC } from "react";
import styled from "styled-components";
import logo from "../../assets/logo/logo_welbex.svg";
import MobileMenu from "./Menu";
import Links from "./Links";
import Contacs from "./Contacs";

const NavBlock = styled.nav<{ padding?: string }>`
  display: flex;
  padding: ${({ padding }) => padding || 0};
  color: #e4e5ea;

  @media (max-width: 1000px) {
    justify-content: space-between;
  }

  @media (max-width: 1172px) {
    padding: 20px 16px;
    margin: 0;
  }

  @media (max-width: 690px) {
    justify-content: center;
  }
`;

const LogoElem = styled.a.attrs({
  href: "#",
})`
  display: block;
  margin: 11px 52px 0 0;
  text-decoration: none;
  width: 140px;
  color: #e4e5ea;
  & > img {
    display: block;
    height: 24px;
  }
  & > span {
    display: block;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin-top: 10px;

    @media (max-width: 690px) {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

const Nav: FC = () => (
  <>
    <NavBlock padding="46px 0 0 0">
      <LogoElem>
        <img src={logo} alt="welbex" />
        <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
      </LogoElem>
      <Links />
      <Contacs />
    </NavBlock>
    <MobileMenu />
  </>
);

export default Nav;
