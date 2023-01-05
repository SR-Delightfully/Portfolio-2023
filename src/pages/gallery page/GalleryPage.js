import { React, useState } from "react";
import styled from "styled-components";

import MainGallery from "./MainGallery";
import ArtGallery from "./ArtGallery";
import CodingGallery from "./CodingGallery";
import MediaLinks from "../contact-me page/MediaLinks";

const GalleryPage = ({ Artwork }) => {
  return (
    <Wrapper>
      {/* <MainGallery Artwork={Artwork} /> */}
      <CodingGallery id="projects" />
      <ArtGallery id="artworks" Artwork={Artwork} />
      <MediaLinks />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;

  /* display: flex; */
  /* flex-flow: column nowrap; */

  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export default GalleryPage;
