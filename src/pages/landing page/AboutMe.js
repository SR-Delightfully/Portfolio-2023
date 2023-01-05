import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Skills from "../../Skills";

const AboutMe = () => {
  return (
    <Wrapper>
      <WrapperTitle>Skills & Background</WrapperTitle>
      <LeftSection>
        {/* <LeftTitle>Skills</LeftTitle> */}
        <SkillsWrapper>
          {Skills.map((skill, index) => {
            return (
              <SkillSummary key={`${skill}${index}`}>
                <>
                  <h1>{skill.title}</h1>
                  <h2>{skill.subTitle}</h2>
                </>
                <>
                  <p>{skill.desc}</p>
                  {/* <button>{skill.doc}</button> */}
                  <Button>View Docs</Button>
                </>
              </SkillSummary>
            );
          })}
        </SkillsWrapper>
      </LeftSection>
      <RightSection>
        <RightWrapper>
          <SubTitle>A little bit about me:</SubTitle>
          <Section>
            <p>
              I'm someone who is dedicating to learning by creating fun and
              imaginitive projects. I believe that there is beauty in everything
              and art can be made out of anything.
            </p>
            <p>
              {" "}
              I've worked as a cashier for several years before deciding to make
              a switch into the tech industry. After participating in a bootcamp
              for web development I got a taste for learning again and decided
              to further my education.
            </p>
            <p> I'm hoping to return to school this coming fall.</p>
            <p>
              {" "}
              In the meantime, I'm looking to gain experience and develop my
              skills through internships and/or a part-time jobs.
            </p>
          </Section>
          <SubSection>
            <h2>If you’re interested in hearing more of my story,</h2>
            <h2>Or you’re curious about working with me</h2>
            <Link
              to={{
                pathname: "/portfolio/contact-me",
              }}
            >
              <ButtonAccent>Contact Me</ButtonAccent>
            </Link>
          </SubSection>
        </RightWrapper>
      </RightSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(
    180deg,
    var(--color-chocolate-traditional) 0%,
    var(--tone-2) 25%,
    var(--tone-1) 100%
  );
  padding: 0rem 6rem 1rem 0rem;
  position: relative;

  display: flex;
  flex-flow: row nowrap;
`;
const WrapperTitle = styled.h1`
  color: var(--color-sinopia);
  text-shadow: 0rem 0.1rem 0rem var(--tone-0);

  position: absolute;
  top: 0;
  left: 1rem;

  font-size: 8rem;
`;
const LeftSection = styled.div`
  padding-top: 9rem;
  flex: 1;
  overflow: hidden;
`;

const SkillsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  overflow-x: hiddden;
  overflow-y: scroll;
  scrollbar-width: none;
  cursor: n-resize;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const SkillSummary = styled.div`
  border: 1px solid var(--tone-1);
  background-color: #00000080;
  flex: 1;

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 0.5rem;

  position: relative;
  min-height: 8rem;
  min-width: 100%;
  overflow: hidden;
  box-shadow: 0rem 0rem 1rem #25020080;
  overflow-x: hiddden;
  overflow-y: scroll;
  scrollbar-width: none;
  transition: background-color 1s linear, min-height 0.2s linear,
    box-shadow 0.5s linear;
  &&::-webkit-scrollbar {
    display: none;
  }
  &&:hover {
    background-color: var(--tone-0);
    min-height: 16rem;
    box-shadow: 0rem 0rem 1rem var(--color-kobe);
  }
  && > h1 {
    font-size: 1.6rem;
    color: transparent;
    width: 50%;
    font-family: "Tapestry";
    background-image: radial-gradient(
      circle,
      var(--color-lemon-curry),
      var(--color-harvest-gold),
      var(--color-chocolate-traditional)
    );
    -webkit-background-clip: text;
    border-bottom: 1px solid var(--color-chocolate-traditional);
    align-self: flex-end;
  }
  && > h2 {
    width: 50%;
    font-size: 1.3rem;
    font-family: "Tapestry";
    color: var(--color-harvest-gold);
    border-bottom: 1px solid var(--color-chocolate-traditional);
    align-self: flex-end;
  }
  && > p {
    width: 100%;
    font-size: 1.2rem;
    font-family: "Nunito";
    color: #897b63;

    margin: 2rem 0 2rem 0;
  }
`;

const RightSection = styled.div`
  padding-top: 9rem;

  flex: 2;
`;
const RightWrapper = styled.div`
  background-color: #00000080;
  height: 100%;
  margin: 0rem 1rem 1rem 1rem;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  gap: 1rem;

  overflow-x: hiddden;
  overflow-y: scroll;
  scrollbar-width: none;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

const SubTitle = styled.h1`
  font-size: 3rem;
  color: transparent;
  min-width: 100%;
  font-family: "Averia Libre";
  background-image: radial-gradient(
    circle,
    var(--color-lemon-curry),
    var(--color-harvest-gold),
    var(--color-chocolate-traditional)
  );
  -webkit-background-clip: text;
  /* left: 0; */
  /* margin-bottom: 0.7rem; */
  border-bottom: 1px solid var(--color-chocolate-traditional);
  align-self: flex-end;
  /* border: 1px solid blue; */
  /* flex: 1; */
`;
const Section = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-family: "Nunito";
  color: #897b63;
  min-width: 100%;
  /* position: absolute; */
  /* bottom: 0; */
`;

const SubSection = styled.div`
  color: var(--color-harvest-gold);
  align-self: flex-end;
`;
const Button = styled.button`
  display: block;
  margin: 1rem;
  font-size: 1rem;
  font-family: "Averia Libre";
  background-color: transparent;
  color: var(--color-bistre-brown);
  height: 3rem;
  width: 8rem;

  border: 2px solid;
  border-image: linear-gradient(
      to right,
      var(--color-bistre-brown),
      var(--color-harvest-gold),
      var(--color-lemon-curry),
      var(--color-harvest-gold),
      var(--color-bistre-brown)
    )
    1 1 1 1;
  transition: border 1s linear, border-image 1s linear, font-size 0.2s linear,
    color 0.2s linear;
  &&:hover {
    cursor: pointer;
    border: 1px solid;
    border-image: linear-gradient(
        to right,
        transparent,
        var(--color-bistre-brown),
        var(--color-harvest-gold),
        var(--color-lemon-curry),
        var(--color-harvest-gold),
        var(--color-bistre-brown),
        transparent
      )
      1 1 1 1;
    font-size: 1.2rem;
    color: var(--color-lemon-curry);
  }
`;
const ButtonAccent = styled.button`
  display: block;
  margin: 1rem 0rem 1rem 0rem;
  font-size: 2rem;
  font-family: "Averia Libre";
  background-color: transparent;
  color: var(--color-sinopia);
  background-color: var(--color-kobe);
  height: 4rem;
  width: 100%;

  transition: background-color 0.5s linear, border-image 1s linear,
    font-size 0.2s linear, color 0.2s linear, text-shadow 0.2s linear;
  &&:hover {
    background-color: var(--color-sinopia);
    cursor: pointer;
    border: 2px solid;
    text-shadow: 0rem 0.1rem 0rem var(--tone-0);

    border-image: linear-gradient(
        to right,
        transparent,
        var(--color-bistre-brown),
        var(--color-harvest-gold),
        var(--color-lemon-curry),
        var(--color-harvest-gold),
        var(--color-bistre-brown),
        transparent
      )
      1 1 1 1;
    font-size: 2.2rem;
    color: var(--tone-8);
  }
`;

export default AboutMe;
