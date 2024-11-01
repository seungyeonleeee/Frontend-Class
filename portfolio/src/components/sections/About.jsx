import React from "react";
import styled from "styled-components";
import AboutIntro from "./AboutIntro";
import AboutSkill from "./AboutSkill";
import { wrapper, Inner } from "../../util";

const Container = styled.section`
  ${wrapper}
  position: relative;
  padding: 100px 0 140px;
  background-color: var(--bg-beige-color);
  border-radius: 40px 40px 0 0;
`;
const AboutInner = styled(Inner)`
  position: relative;
  flex-direction: column;
  gap: 100px;
`;
const LineElement = styled.div`
  width: 40%;
  min-width: 700px;
  position: absolute;
  top: 8%;
  left: 0;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const About = () => {
  return (
    <Container>
      <LineElement>
        <svg
          width="967"
          height="793"
          viewBox="0 0 967 793"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M964.748 791C683.939 791 422.406 712.5 463.247 497C486.747 373 427.247 323.529 395.747 289C395.747 289 329.247 217 274.247 241C246.747 253 227.143 302.882 268.384 323.529C331.247 355 345.828 276.932 341.899 241C338.245 223.492 323.15 150.372 258.046 103.422C207.542 67 115.623 67.5646 57.3794 39.5C37.7445 30.039 19.3954 17.3819 2.32031 2"
            stroke="#FF481F"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </LineElement>
      <AboutInner>
        <AboutIntro />
        <AboutSkill />
      </AboutInner>
    </Container>
  );
};

export default About;
