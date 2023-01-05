import { React, useState } from "react";
import styled from "styled-components";
import MediaLinks from "../contact-me page/MediaLinks";
import Artwork from "../../Artwork";

const ArtGallery = () => {
  const handleImages = (e) => {
    let images = document.querySelectorAll("#img");
    let index = 0;

    images.forEach((img) => {
      index += 1;
      // console.log(`index is ${index}`);

      let activeImage = document.getElementById(`aw${index}`);
      // console.log(`activeImage is ${activeImage}`);

      // console.log(`target id ${e.target.id}, and it should be aw${index}`);
      if (e.target.id === `aw${index}`) {
        activeImage.classList.toggle("active");
      } else {
        activeImage.classList.toggle("inactive");
        activeImage.classList.remove("active");
      }
      // console.log(`there are ${images.length} images`);
    });
  };

  console.log(Artwork);
  return (
    <Wrapper>
      <WrapperTitle>Digital Art Pieces</WrapperTitle>

      <GalleryWrapper className="">
        {Artwork?.map((art, index) => {
          index = index + 1;

          return (
            <GalleryItem
              key={`${art.title}S{index}`}
              id={`aw${index}`}
              onClick={handleImages}
            >
              <ImgInfo id="img" className="info">
                <h1>{art.title}</h1>
                <h4>{art.desc}</h4>
              </ImgInfo>
              <Img
                id={`aw${index}`}
                className="image"
                src={art.src}
                alt={`${art.title} - ${art.desc}`}
              />
            </GalleryItem>
          );
        })}
      </GalleryWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 110vh;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(
    180deg,
    var(--color-kobe) 0%,
    var(--color-dark-sienna) 50%,
    var(--tone-0) 100%
  );
  position: relative;
  top: 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: flex-start;
  /* padding-right: 6rem; */
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const WrapperTitle = styled.h1`
  color: var(--color-sinopia);
  text-shadow: 0rem 0.1rem 0rem var(--tone-0);

  position: absolute;
  top: 0;
  left: 0.5rem;

  font-size: 8rem;
`;

const GalleryWrapper = styled.div`
  height: 80%;
  width: 100%;

  overflow-y: scroll;
  overflow-x: hidden;

  position: relative;
  top: 10rem;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;

  gap: 1rem;

  margin: 0rem 7rem 0rem 1rem;
  scrollbar-width: none;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const GalleryItem = styled.div`
  border-bottom: 2px solid;
  border-image: linear-gradient(
      to right,
      var(--color-bistre-brown),
      var(--color-harvest-gold),
      var(--color-lemon-curry),
      var(--color-harvest-gold),
      var(--color-bistre-brown)
    )
    0 0 1 0;
  height: 18rem;
  width: 14rem;
  display: flex;
  justify-content: center;

  overflow: hidden;
  position: relative;
  transition: visibility 0s, opacity 0.5s linear, border-image 0s;
  box-shadow: 0rem 0rem 1rem #25020080;
  z-index: 1;
  &&:hover {
    border-image: linear-gradient(
        to right,
        var(--color-bistre-brown),
        var(--color-harvest-gold),
        var(--color-lemon-curry),
        var(--color-harvest-gold),
        var(--color-bistre-brown)
      )
      0 0 0 0;
  }
  &&:hover > .info {
    visibility: visible;
    opacity: 1;
    height: 25%;
  }
  &&.active :hover {
    cursor: pointer;
  }
  &&.active {
    min-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 99999;
    box-shadow: none;
  }
  &&.active > img {
    max-width: 40%;
  }
  &&.active > .info {
    visibility: hidden;
    opacity: 0;
    height: 0;
  }
  &&.inactive {
    filter: blur(8px);
  }
`;

const ImgInfo = styled.div`
  border-top: 2px solid;
  border-image: linear-gradient(
      to right,
      var(--color-bistre-brown),
      var(--color-harvest-gold),
      var(--color-lemon-curry),
      var(--color-harvest-gold),
      var(--color-bistre-brown)
    )
    1 0 0 0;
  position: absolute;
  bottom: 0;
  background-color: #000;
  color: #f0a0a0;
  height: 0%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;

  transition: all 0.3s ease;
  visibility: hidden;
  opacity: 0;
  padding: 0.5rem;
  &&::-webkit-scrollbar {
    display: none;
  }
  && > h1 {
    font-size: 1.6rem;
    color: transparent;
    width: 100%;
    font-family: "Tapestry";
    background-image: radial-gradient(
      circle,
      var(--color-lemon-curry),
      var(--color-harvest-gold),
      var(--color-chocolate-traditional)
    );
    -webkit-background-clip: text;
    margin-bottom: 0.7rem;
    border-bottom: 1px solid var(--color-chocolate-traditional);
  }
  && > h4 {
    font-size: 0.8rem;
    font-family: "Averia Libre";
    color: var(--color-chocolate-traditional);
  }
`;
const Img = styled.img`
  border: 1px solid var(--tone-1);
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  cursor: zoom-in;
`;

export default ArtGallery;
