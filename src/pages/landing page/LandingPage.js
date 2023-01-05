import React from "react";
import styled from "styled-components";

import CallToAction from "./CallToAction";
import AboutMe from "./AboutMe";
import MediaLinks from "../contact-me page/MediaLinks";

const LandingPage = (portraits) => {
  return (
    <Wrapper>
      <CallToAction portraits={portraits} />
      <AboutMe />
      <MediaLinks />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;

  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export default LandingPage;
