import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const MediaLinks = () => {
  return (
    <Footer className="footer">
      <a href="https://www.linkedin.com/in/sabrina-robinson-385229246/">
        <Tab>
          <FaLinkedinIn />
        </Tab>
      </a>
      <a href="https://github.com/SR-Delightfully">
        <Tab>
          <FaGithub />
        </Tab>
      </a>
      <a href="https://docs.google.com/document/d/1HOvyxZFyYJmKmOXG4BcSVlVdMAbse0HvCek9rgnrYt8/edit?usp=sharing">
        <Tab>
          <IoDocumentTextOutline />
        </Tab>
      </a>
    </Footer>
  );
};

const Footer = styled.div`
  background-color: var(--tone-0);
  height: 5rem;
  width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  padding-right: 6rem;

  position: relative;
  && > a {
    color: var(--tone-5);
  }
  && > a:active {
    color: var(--tone-3);
  }
`;
const Tab = styled.div`
  border: 2px solid var(--tone-3);
  border-radius: 2px;
  height: 4rem;
  width: 4rem;
  font-size: 3rem;
  background-color: var(--tone-4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MediaLinks;
