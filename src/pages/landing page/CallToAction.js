import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const CallToAction = (portraits) => {
  const name = "SABRINA";
  const nameArray = name.split("");

  return (
    <Wrapper>
      <Content>
        <Heading>
          <h1>Hey there, I'm</h1>
          <Name>
            {nameArray.map((letter, index) => {
              return <Letter key={`${letter}${index}`}>{letter}</Letter>;
            })}
          </Name>
          <h2>Junior full stack developer & digital artist</h2>
        </Heading>
        <SubHeading>
          {/* link to art gallery */}
          <Link
            to={{
              pathname: "/portfolio-2023/gallery/artworks",
            }}
          >
            <Button className="fill">See Artworks</Button>
          </Link>
          {/* link to project gallery */}

          {/* <Link to="/gallery/projects"> */}
          <Link
            to={{
              pathname: "/portfolio-2023/gallery/projects",
            }}
          >
            <Button className="fill">See Projects</Button>
          </Link>
        </SubHeading>
      </Content>
      <>
        <TriangleOverlay />
        <HeroBackground>
          <PortraitA src={portraits.portraits.portraits[0]} className="a" />
          {/* <PortraitB src={portraits.portraits.portraits[1]} className="b" /> */}
        </HeroBackground>
      </>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 4px solid var(--color-dark-sienna);

  height: 100vh;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(
    180deg,
    var(--color-lemon-curry) 0%,
    var(--color-harvest-gold) 50%,
    var(--color-bistre-brown) 100%
  );
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 6rem;
  overflow: hidden;

  position: relative;
  z-index: 8888;
`;

const Content = styled.div`
  width: 54rem;
  height: 22rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 2%;
  top: 18%;
  z-index: 9001;
`;
const Button = styled.button`
  height: 4rem;
  width: 10rem;
  border: 3px solid;
  border-image: linear-gradient(
      to right,
      var(--color-bistre-brown),
      var(--color-harvest-gold),
      var(--color-lemon-curry),
      var(--color-harvest-gold),
      var(--color-bistre-brown)
    )
    1 1 1 1;
  cursor: pointer;
  color: var(--color-bistre-brown);
  font-size: 1.4rem;
  font-family: "Averia Libre";
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  transition: border 1ms linear;
  &:hover {
    border: 1px solid;
    color: var(--color-lemon-curry);
    border-image: linear-gradient(
        to right,
        var(--color-bistre-brown),
        var(--color-lemon-curry),
        var(--color-bistre-brown)
      )
      1 1 1 1;
  }
  &&::after {
    content: "";
    background-color: var(--tone-1);
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 0.5rem;
    left: 0.5rem;
    transition: 0.2s;
    box-shadow: 0.2rem 0.2rem 1rem var(--tone-2);
  }

  &&:hover::after {
    background-color: var(--color-kobe);
    top: 0;
    left: 0;
    box-shadow: 0.2rem 0.2rem 1rem var(--color-dark-sienna);
  }
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
const SubHeading = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;
const Letter = styled.p`
  font-size: 7rem;
  display: inline-block;
  font-family: "Tapestry";
`;
const Name = styled.div`
  display: inline-block;
  background-image: radial-gradient(
    circle,
    var(--color-lemon-curry),
    var(--color-harvest-gold),
    var(--color-chocolate-traditional)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0rem -0.1rem 0rem var(--color-lemon-curry))
    drop-shadow(0rem 0.2rem 0rem var(--color-chocolate-traditional))
    drop-shadow(0rem 0.1rem 0rem var(--tone-0))
    drop-shadow(0rem 0rem 0.2rem var(--tone-0))
    drop-shadow(0rem 0.1rem 0rem var(--tone-6));
`;
const TriangleOverlay = styled.div`
  border-style: solid;
  border-width: 0 0 100vh 100vw;
  border-color: #516055 #516055 transparent #516055;
  /* border-image: url("https://img.freepik.com/free-photo/lined-concrete-texture_1194-7078.jpg?w=996&t=st=1672347726~exp=1672348326~hmac=d00a75979b2fb19320591b9db7e0acd23e5aaafa977434bdee6dbfc00936f581") */
  /* 100% round; */
  z-index: 0;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const HeroBackground = styled.div`
  background-color: var(--color-kobe);
  min-height: 40rem;
  min-width: 40rem;
  border-radius: 36rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 8%;
  && > img {
    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;
  }
`;

const PortraitA = styled.img`
  position: absolute;
  bottom: 0rem;
  height: 100vh;
  width: 40rem;
  filter: sepia(0.2) brightness(0.9) saturate(1.6);
  z-index: 601;
  /* &&:hover { */
  /* opacity: 0; */
  /* } */
`;
const PortraitB = styled.img`
  position: absolute;
  bottom: 0rem;
  height: 96vh;
  width: 64rem;
  z-index: 600;
  transform: scaleX(-1);
`;

export default CallToAction;
