import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <CarMenuWrapper>
          {cars &&
            cars.map((car, index) => (
              <li>
                <a key={index} href="#">
                  {car}
                </a>
              </li>
            ))}
        </CarMenuWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cyber truck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  /* 위치 고정 */
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 양 옆 padding 20px */
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    /* 0는 top & bottom, 양옆은 10px */
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

// 햄버거 아이콘 위해서 material-ui/core marterial-ui/icons install
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 8px 32px 48px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.25s;

  li {
    padding: 12px 0px 12px 15px;
    margin: 4px 0;
    color: rgb(57, 60, 65);
    font-size: 14px;
    :hover {
      background: #f4f4f4;
      border-radius: 20px;
      cursor: pointer;
    }
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 80px;
  align-items: center;
`;

const CarMenuWrapper = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`;
