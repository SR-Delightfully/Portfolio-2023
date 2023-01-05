import { React, useState, useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import MediaLinks from "./MediaLinks";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText("sending...");
    emailjs
      .sendForm(
        "service_ri7iauc",
        "template_zfn4vxc",
        form.current,
        "sVn5-N5jIqho7tpKD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [buttonText, setButtonText] = useState("send email");
  const [status, setStatus] = useState({});

  return (
    <>
      <Wrapper>
        <WrapperTitle> Contact me</WrapperTitle>
        <Form ref={form} onSubmit={sendEmail}>
          <FormSection className="small">
            <Label>
              <h3>subject</h3>
            </Label>
            <Input
              type="text"
              className="small"
              placeholder="subject"
              name="subject"
            ></Input>
          </FormSection>

          <FormSection className="small">
            <SubSection>
              <Label>
                <h3>name</h3>
              </Label>
              <Input
                type="text"
                className="small"
                placeholder="name"
                name="name"
              ></Input>
            </SubSection>

            <SubSection>
              <Label>
                <h3>pronouns</h3>
              </Label>
              <Input
                type="text"
                className="small"
                placeholder="pronouns"
                name="pronouns"
              ></Input>
            </SubSection>
          </FormSection>

          <FormSection className="small">
            <Label>
              <h3>email</h3>
            </Label>
            <Input
              type="text"
              className="small"
              placeholder="e-mail"
              name="email"
            ></Input>
          </FormSection>

          <FormSection className="big">
            <Label>
              <h3>message</h3>
            </Label>
            <Input
              type="textarea"
              className="big"
              placeholder="leave your message here!"
              name="message"
            ></Input>
          </FormSection>
          <FormSection>
            <Button type="submit">{buttonText}</Button>
            {status.message && (
              <p className={status.success === false ? "danger" : "success"}>
                {status.message}
              </p>
            )}
          </FormSection>
        </Form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-right: 7rem;
  height: 110vh;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(
    180deg,
    var(--color-lemon-curry) 0%,
    var(--tone-4) 75%,
    var(--tone-3) 100%
  );

  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  /* align-items: flex-end; */
`;
const WrapperTitle = styled.h1`
  color: var(--color-sinopia);
  text-shadow: 0rem 0.1rem 0rem var(--tone-0);

  position: relative;
  top: 0;
  left: 0.5rem;

  /* left: 2rem; */

  font-size: 8rem;
`;
const Form = styled.form`
  background: var(--tone-3);
  border: 2px solid var(--color-harvest-gold);
  border-radius: 0.5rem;
  height: 40rem;
  width: 64rem;

  position: relative;
  top: 0;
  left: 1rem;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 0.5rem;
  padding: 1rem;

  overflow: hidden;

  margin-bottom: 1rem;
`;
const FormSection = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;

  &&.small {
    height: 6rem;
  }
  &&.big {
    height: 12rem;
  }
`;
const SubSection = styled.div`
  border-radius: 0.5rem;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;
const Label = styled.label`
  border-radius: 0.5rem;
  width: 12rem;
  display: flex;
  justify-content: flex-start;
  margin-left: 0.2rem;
  color: var(--tone-7);
  align-items: center;

  text-transform: Uppercase;
  text-shadow: 0rem 0.2rem 0rem var(--tone-0);
  font-size: 1.5rem;
  && > h1 {
  }
`;

const Input = styled.input`
  background: linear-gradient(180deg, var(--tone-8) 25%, var(--tone-6) 100%);
  border: 2px solid var(--tone-0);
  border-radius: 0.2rem;
  height: 2.5rem;
  width: 100%;
  padding: 1rem;

  &&:focus {
    outline: none;
  }
  &&.small {
    height: 2.5rem;
  }
  &&.big {
    height: 10rem;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  background-color: var(--color-harvest-gold);
  border: 2px solid var(--color-chocolate-traditional);
  border-radius: 0.5rem;
  box-shadow: 0rem -0.1rem 0.5rem var(--tone-4),
    0rem 0.2rem 0.2rem var(--tone-0), 0rem 0.2rem 0.5rem var(--tone-0),
    inset 0.1rem 0.1rem 2rem var(--color-tenne-tawny),
    inset -0.1rem -0.1rem 2rem var(--color-tenne-tawny);

  color: var(--tone-8);
  font-size: 1.5rem;
  text-shadow: 0rem 0rem 0.2rem var(--color-chocolate-traditional),
    0rem 0rem 2rem var(--color-lemon-curry);
`;

export default EmailForm;
