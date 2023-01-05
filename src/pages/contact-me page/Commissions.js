import { React, useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const Commissions = () => {
  const [buttonText, setButtonText] = useState("send commission request");
  const [status, setStatus] = useState({});

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText("sending...");
    emailjs
      .sendForm(
        "service_ri7iauc",
        "template_jrpbkz8",
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

  // const [timeDelay, setTimeDelay] = useState(1);
  // const [hours, setHours] = useState(0);
  // const [result, setResult] = useState("");
  // // when posting the request, push into RequestSlots
  // const RequestSlots = [];
  // // if the commission is approved, push the request into CommissionSlots
  // const CommissionSlots = ["CS1"];
  // // const timeDelay = 4;
  // // timeDelay = timeDelay / CommissionSlots.length;
  // console.log(CommissionSlots.length / 2);
  // const hourlyRate = 14.5;
  // useEffect(() => {
  //   setSubmitButtonText("Send Request");
  //   setHours(factors.fullBody.fullyRendered);
  //   if (CommissionSlots.length / 2 >= 1) {
  //     setTimeDelay(CommissionSlots.length / 2);
  //   } else {
  //     setTimeDelay(1);
  //   }
  //   setResult((hourlyRate * hours) / timeDelay);
  // }, []);
  // console.log(
  //   `the hourly rate is ${hourlyRate}. for ${hours}hrs it will cost ${result}.00$`
  // );
  // console.log(timeDelay);

  // const factors = {
  //   fullBody: {
  //     sketch: 10,
  //     coloredSketch: 15,
  //     fullyRendered: 20,
  //   },
  //   halfBody: {
  //     sketch: 7,
  //     coloredSketch: 10,
  //     fullyRendered: 15,
  //   },
  //   portrait: {
  //     sketch: 5,
  //     coloredSketch: 7,
  //     fullyRendered: 10,
  //   },
  // };
  // const bonusFactors = {
  //   backgrounds: {
  //     simple: 0,
  //     detailed: 5,
  //   },
  //   hairLength: {
  //     short: 0,
  //     medium: 0,
  //     long: 5,
  //     extraLong: 10,
  //   },
  //   companions: {
  //     creature: 5,
  //     complexCreature: 10,
  //     extraPerson: 20,
  //   },w
  // };

  // const handleFactor = () => {
  //   // we might have to do a little bit more research on this part tomorrow morning,
  //   // but essentially the idea is that when we choose one of these factors it will change the hours accordingly.
  // };
  // const handleBonusFactors = () => {
  //   // and this one is the same idea, but it will just change the result instead! (we're just adding to it really. but im not sure how to search for the factor? )
  // };

  return (
    <Wrapper>
      <h3> Commission request form</h3>
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
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background: linear-gradient(
    180deg,
    var(--tone-7) 0%,
    var(--color-lemon-curry) 100%
  );
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding-right: 6rem;
`;
const Form = styled.form`
  background: var(--tone-3);
  border: 2px solid var(--color-harvest-gold);
  border-radius: 0.5rem;
  height: 40rem;
  width: 64rem;
  padding: 1rem;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  gap: 0.5rem;

  overflow: hidden;

  box-shadow: inset 1rem 1rem 6rem var(--tone-1),
    inset -1rem -2rem 6rem var(--tone-1),
    0rem 0rem 32rem var(--color-lemon-curry),
    0rem 0rem 32rem var(--color-bistre-brown);
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

  padding: 2rem 0.5rem, 1rem, 0.5rem;
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

const RequestSection = styled.div`
  /* display: flex; */
  /* flex-flow: row wrap; */
`;
const RequestSubSection = styled.div`
  /* border: 1px solid lime; */
  /* display: flex; */
  /* flex-flow: column nowrap; */
`;

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
const Col = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const Factors = styled.div`
  display: flex;
  flex-flow: row wrap;
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
export default Commissions;
