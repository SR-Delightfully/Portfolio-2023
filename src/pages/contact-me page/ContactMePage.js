import React from "react";
import styled from "styled-components";

import Commissions from "./Commissions";
import EmailForm from "./EmailForm";
import MediaLinks from "./MediaLinks";

const ContactMePage = () => {
  return (
    <Wrapper>
      {/* <Commissions /> */}
      <EmailForm />
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

export default ContactMePage;
