import { FC, useState } from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Links from "./Links";
import Contacs from "./Contacs";

const BurgerElem = styled.button<{ position: "fixed" | "absolute" }>`
  display: none;
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;

  & > svg {
    display: block;
  }

  @media (max-width: 690px) {
    display: block;
    position: ${({ position }) => position};
    top: 20px;
    right: 16px;
  }
`;

const MobileMenuElem = styled.div<{ left: string }>`
  display: none;
  position: fixed;
  top: 0px;
  left: ${({ left }) => left};
  height: 100%;
  width: 100%;
  background: black;
  transition: 0.5s ease;
  z-index: 1;

  @media (max-width: 690px) {
    display: block;
  }
`;

const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerElem position="fixed" onClick={() => setOpen(true)}>
        <BiMenu size="30px" color="#e4e5ea" />
      </BurgerElem>
      <MobileMenuElem left={open ? "0px" : "100%"}>
        <BurgerElem position="absolute" onClick={() => setOpen(false)}>
          <IoMdClose size="30px" color="#e4e5ea" />
        </BurgerElem>
        <Links device="mobile" />
        <Contacs device="mobile" />
      </MobileMenuElem>
    </>
  );
};

export default MobileMenu;
