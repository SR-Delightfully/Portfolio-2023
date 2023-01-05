import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { TiHome, TiThLarge, TiMail } from "react-icons/ti";

const NavBar = (icon) => {
  return (
    <Wrapper>
      <TabWrapper>
        <Tab>
          <Link to="/portfolio">
            <TiHome />
          </Link>
        </Tab>
        <Tab>
          <Link to="/portfolio/gallery">
            <TiThLarge />
          </Link>
        </Tab>
        <Tab>
          <Link to="/portfolio/contact-me">
            <TiMail />
          </Link>
        </Tab>
        <Link to="/portfolio">
          <Logo>
            <Img src={icon.icon} />
          </Logo>
        </Link>
      </TabWrapper>
      <Background />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-right: 2px solid var(--tone-1);
  height: 100vh;
  width: 6rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  /* right: 0; */
  box-shadow: inset 1rem 1rem 2rem var(--tone-1),
    inset 0.2rem 0.2rem 1rem var(--color-dark-sienna),
    inset -1rem -1rem 2rem var(--tone-1);
  z-index: 9999;
`;

const Logo = styled.div`
  /* border: 2px solid var(--tone-0); */
  margin-top: 5.5rem;
  height: 6rem;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &&:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  height: 5rem;
  width: 5rem;
`;

const Tab = styled.div`
  border: 2px solid #60606080;
  border-radius: 4rem;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  font-size: 2.5rem;
  background-color: var(--tone-2);
  box-shadow: inset 0.5rem 0.5rem 2rem var(--tone-3),
    0rem -0.1rem 0.5rem var(--tone-4), 0rem 0.2rem 0.2rem var(--tone-0),
    0rem 0.2rem 0.5rem var(--tone-1), inset -0.5rem -0.5rem 2rem var(--tone-3);
  transition: all 50ms linear;
  &&:active {
    border: 2px solid var(--tone-2);
    justify-content: center;
  }
  &&:hover {
    border: 2px none var(--tone-2);
    font-size: 2.8rem;
    transition: font-size 350ms linear;
  }
  && > a {
    color: var(--tone-5);
    /* box-shadow: inset 0rem 0rem 1rem #fff; */
    /* text-shadow: 1rem 1rem 1rem hotpink; */
    filter: drop-shadow(0rem 0rem 0.2rem var(--tone-1));
  }
  && > a:active {
    color: var(--tone-3);
    font-size: 2.2rem;
    filter: drop-shadow(0rem 0rem 1rem var(--tone-0));
  }
`;

const TabWrapper = styled.div`
  /* border: 1px solid hotpink; */
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  gap: 4rem;
  margin-top: 12rem;
  z-index: 1;
`;
const Background = styled.div`
  background-color: var(--tone-3);
  height: 110%;
  width: 110%;
  position: absolute;
  z-index: 0;
  filter: blur(2.5rem);
`;

export default NavBar;
