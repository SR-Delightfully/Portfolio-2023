import { React, useState } from "react";
import styled from "styled-components";

const MainGallery = ({ codingPojects, artProjects }) => {
  // for the mean time, we're going to store our mock database in here, but when the time comes
  //  you should connect to a mongo database and store this information there!

  // side note: if you want to upload work through a post, you might need to set up some user authentication(yknow, so random people can't upload stuff)(or you can just comment out the form before showcasing the website. either way works.)

  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(
    180deg,
    var(--tone-7) 0%,
    var(--color-lemon-curry) 75%,
    var(--color-harvest-gold) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 6rem;
  &&::-webkit-scrollbar {
    background-color: hotpink;
  }
`;
const Highlights = styled.div`
  border: 1px solid red;
  display: flex;
  height: 42rem;
  width: 62rem;
`;
const CodingHighlights = styled.div`
  border: 1px solid red;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  height: 100%;
  width: 50%;
`;
const CodingHighlight = styled.div`
  border: 1px solid red;
  display: flex;
  flex-flow: row wrap;
  height: 50%;
  width: 100%;
`;
const ArtHighlights = styled.div`
  border: 2px solid rebeccapurple;
  height: 100%;
  width: 50%;
  position: relative;
`;
const ArtHighlight = styled.div`
  border: 2px solid lime;
  height: 100%;
  width: 100%;
`;

export default MainGallery;
