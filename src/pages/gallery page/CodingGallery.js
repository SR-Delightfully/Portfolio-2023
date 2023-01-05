import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import Project from "../../project/Project.js";
const CodingGallery = () => {
  // console.log(Project);

  return (
    <Wrapper>
      <WrapperTitle>Projects</WrapperTitle>
      <ProjectWrapper>
        {Project.map((project, index) => {
          index = index + 1;

          return (
            <ProjectItem key={`${project.title}S{index}`} id="project">
              <ProjectDetails id={`pr${index}`} className="info">
                <h1>{project.title}</h1>
                <h2>{project.subTitle}</h2>
                <p>{project.desc}</p>
                <Background />
              </ProjectDetails>
              <ProjectImages id={`pr${index}`} className="image">
                <ImgA src={project.src[0]} className="imgA" />
                <ImgB src={project.src[1]} className="imgB" />
              </ProjectImages>
            </ProjectItem>
          );
        })}
      </ProjectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    var(--color-harvest-gold) 0%,
    var(--color-ochre) 50%,
    var(--color-kobe) 100%
  );

  /* border: 2px solid hotpink; */
  height: 100vh;
  width: 100%;
  max-width: 100%;

  position: relative;
  top: 0;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-right: 6rem;
  scrollbar-width: none;
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
const ProjectWrapper = styled.ol`
  /* border: 2px solid green; */
  height: 75%;
  min-width: 100%;
  max-width: 100vw;
  padding: 0rem 7rem 0rem 1rem;

  list-style: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  position: absolute;
  top: 15%;
  left: 0;
  z-index: 8;
`;
const ProjectItem = styled.li`
  height: 25rem;
  width: 40rem;
  position: relative;
  z-index: 8;

  overflow: visible;
  transition: visibility 0s, opacity 0.5s linear, border-image 0s;
  box-shadow: 0rem 0rem 1rem #25020080;
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
`;
const ProjectDetails = styled.div`
  background: #00000095;
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

  height: 6rem;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;

  padding: 1rem 1rem 0rem 1rem;
  position: absolute;
  bottom: 0;

  overflow: hidden;
  /* filter: blur(8px); */
  transition: height 0.2s linear, background 0.6s linear;
  z-index: 99;
  && > h1 {
    line-height: 3rem;
    font-family: "Tapestry";
    color: transparent;
    background-image: radial-gradient(
      circle,
      var(--color-lemon-curry),
      var(--color-harvest-gold),
      var(--color-chocolate-traditional)
    );
    -webkit-background-clip: text;

    /* border-bottom: 1px solid var(--color-chocolate-traditional); */
  }
  && > h2 {
    line-height: 1rem;
    margin: 0.2rem 0rem 1rem 0rem;
    font-family: "Averia Libre";
    color: var(--color-chocolate-traditional);
    text-shadow: 0rem 0.1rem 0rem var(--tone-0);
  }
  && > p {
    font-family: "Nunito";
    color: #897b63;
  }
  &&:hover {
    background: var(--tone-1);
    height: 25rem;
    /* top: 0; */
    z-index: 99999;
  }
`;
const ProjectImages = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  background-color: var(--color-dark-sienna);
  &&:hover > .imgA {
    opacity: 0;
  }
  &&:hover > .imgB {
    opacity: 1;
  }
`;
const ImgA = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
  opacity: 1;
  transition: opacity 0.5s linear;
`;
const ImgB = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 8;
  opacity: 0;
  transition: opacity 0.5s linear;
  &&:hover {
    opacity: 1;
  }
`;
const Background = styled.div`
  background-color: #00000080;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  margin: -1rem;
  filter: blur(2.5rem);
`;

export default CodingGallery;
