import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import LandingPage from "./pages/landing page/LandingPage";
import GalleryPage from "./pages/gallery page/GalleryPage";
import ContactMePage from "./pages/contact-me page/ContactMePage";

import icon from "./images/icon.png";
import photoPortrait from "./images/photoPortrait.png";
import drawnPortrait from "./images/drawnPortrait.png";

import NavBar from "./blocks/NavBar";
import Palette from "./blocks/Palette";
import Artwork from "./Artwork";
import ArtGallery from "./pages/gallery page/ArtGallery";
import CodingGallery from "./pages/gallery page/CodingGallery";

const App = () => {
  const portraits = [photoPortrait, drawnPortrait];
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Main className="main">
        <NavBar icon={icon} />
        {/* <Palette /> */}
        <Routes>
          <Route
            path="/portfolio-2023"
            element={<LandingPage className="landing" portraits={portraits} />}
          />

          <Route
            path="/portfolio-2023/gallery"
            element={<GalleryPage className="gallery" Artwork={Artwork} />}
          />
          <Route
            path="/portfolio-2023/gallery/artworks"
            element={<ArtGallery className="contact-me" />}
          />
          <Route
            path="/portfolio-2023/gallery/projects"
            element={<CodingGallery className="contact-me" />}
          />

          <Route
            path="/portfolio-2023/contact-me"
            element={<ContactMePage className="contact-me" />}
          />
          <Route
            path="*"
            element={<h1>The Page you're looking for was not found.</h1>}
          />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};
const Main = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;

  width: 100vw;
  max-width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
