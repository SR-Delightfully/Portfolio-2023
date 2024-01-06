import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import { FaInstagram, FaTwitter, FaPatreon, FaPaypal } from "react-icons/fa";
const App = () => {
  //   <LinkBar className="links">
  //   <Link className="link">
  //     {/* <BiLogoInstagram /> */}
  //     <span>
  //       <FaInstagram />
  //     </span>
  //     <a
  //       href="https://www.instagram.com/delightfully_sr/"
  //       target="blank"
  //     >
  //       Instagram
  //     </a>
  //   </Link>
  //   <Link className="link">
  //     <span>
  //       <FaTwitter />
  //     </span>
  //     <a href="https://twitter.com/Delightfully_SR" target="blank">
  //       Twitter
  //     </a>
  //   </Link>
  //   <Link className="link">
  //     <span>
  //       <FaPatreon />
  //     </span>
  //     <a href="https://patreon.com/Delightfuly_SR" target="blank">
  //       Patreon
  //     </a>
  //   </Link>
  //   <Link className="link">
  //     <span>
  //       <FaPaypal />
  //     </span>
  //     <a href="/" target="blank">
  //       Paypal
  //     </a>
  //   </Link>
  // </LinkBar>
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route
          path="/profile"
          element={
            <div>
              <HeroImg src="https://i.imgur.com/RhB5XLR.png" />
              <LinkBar className="links">
                <Link
                  href="https://www.instagram.com/delightfully_sr/"
                  target="blank"
                >
                  <span>
                    <FaInstagram />
                  </span>
                  <p>Instagram</p>
                </Link>
                <Link href="https://twitter.com/Delightfully_SR" target="blank">
                  <span>
                    <FaTwitter />
                  </span>
                  <p>Twitter</p>
                </Link>
                <Link href="https://patreon.com/Delightfuly_SR" target="blank">
                  <span>
                    <FaPatreon />
                  </span>
                  <p>Patreon</p>
                </Link>
                <Link
                  href="https://www.paypal.com/donate/?hosted_button_id=Z6K3YVZTYDEWG"
                  target="blank"
                >
                  <span>
                    <FaPaypal />
                  </span>
                  <p>Paypal</p>
                </Link>
              </LinkBar>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const HeroImg = styled.img`
  max-height: 30rem;
  max-width: 30rem;
  z-index: 2;
`;
const LinkBar = styled.div`
  background-color: #00000099;
  /* display: flex; */
  /* flex-flow: column nowrap; */
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  height: 30rem;
  padding: 1rem;
  position: relative;
  bottom: 1.4rem;
  border: 0.2rem solid #fff;
  z-index: 1;
`;
const Link = styled.a`
  background-color: #b3c250;
  border: 1px solid #fff;
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 34%;
  padding-left: 1rem;
  font-size: 2rem;
  font-family: "Comfortaa", sans-serif;
  font-weight: 800;
  letter-spacing: 4px;
  text-shadow: 1px 1px;
  transition: color 1s;
  cursor: pointer;
  && > p {
    color: var(--color-castleton-green);
  }
  && > span {
    position: relative;
    top: 0.2rem;
    color: var(--color-castleton-green);
    transition: all 0.6s;
  }
  &&:hover > p {
    color: var(--color-avocado);
  }
  &&:hover > span {
    font-size: 2.5rem;
    margin: -0.25rem;
    /* margin: -0.3rem 0rem -0.3rem -0.3rem; */
  }
`;

export default App;
