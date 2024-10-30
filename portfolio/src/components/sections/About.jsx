import React from "react";
import styled from "styled-components";
import AboutIntro from "./AboutIntro";
import AboutSkill from "./AboutSkill";
import { wrapper, Inner } from "../../util";

const Container = styled.section`
  ${wrapper}
  padding: 100px 0 140px;
  background-color: var(--bg-beige-color);
`;
const AboutInner = styled(Inner)`
  position: relative;
  flex-direction: column;
  gap: 100px;
`;

const About = () => {
  return (
    <Container>
      <AboutInner>
        <AboutIntro />
        <AboutSkill />
      </AboutInner>
    </Container>
  );
};

export default About;
