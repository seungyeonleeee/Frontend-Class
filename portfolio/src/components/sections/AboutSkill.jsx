import React from "react";
import styled from "styled-components";
import { wrapper, ImgBoxSmall } from "../../util";

const Container = styled.div`
  ${wrapper}
  flex-direction: column;
  gap: 50px;
`;
const Skill = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 45px;
  border-left: 1px solid var(--bg-light-gray);
  .skill-icon {
    width: 30px;
    height: 30px;
    background-color: var(--bg-light-gray);
  }
  h3 {
    font: 500 24px/1 "Poppins-Medium";
  }
  p {
    line-height: 1.3;
    color: var(--bg-dark-gray);
  }
`;
const SkillList = styled.ul`
  display: flex;
  li {
    flex: 1;
    height: 650px;
    display: flex;
    &:nth-child(2n) {
      & > ${Skill} {
        justify-content: flex-end;
      }
    }
  }
`;

const AboutSkill = () => {
  return (
    <Container>
      <span>My Skills</span>
      <SkillList>
        <li>
          <Skill>
            <div className="skill-icon"></div>
            <h3>Figma</h3>
            <ImgBoxSmall />
            <p>
              Figma를 활용해 효율적인 UI/UX 디자인을 구현하며, 팀원들과의 실시간
              협업을 통해 디자인 의도를 명확히 전달할 수 있습니다.
            </p>
          </Skill>
        </li>
        <li>
          <Skill>
            <div className="skill-icon"></div>
            <h3>Figma</h3>
            <ImgBoxSmall />
            <p>
              Figma를 활용해 효율적인 UI/UX 디자인을 구현하며, 팀원들과의 실시간
              협업을 통해 디자인 의도를 명확히 전달할 수 있습니다.
            </p>
          </Skill>
        </li>
        <li>
          <Skill>
            <div className="skill-icon"></div>
            <h3>Figma</h3>
            <ImgBoxSmall />
            <p>
              Figma를 활용해 효율적인 UI/UX 디자인을 구현하며, 팀원들과의 실시간
              협업을 통해 디자인 의도를 명확히 전달할 수 있습니다.
            </p>
          </Skill>
        </li>
        <li>
          <Skill>
            <div className="skill-icon"></div>
            <h3>Figma</h3>
            <ImgBoxSmall />
            <p>
              Figma를 활용해 효율적인 UI/UX 디자인을 구현하며, 팀원들과의 실시간
              협업을 통해 디자인 의도를 명확히 전달할 수 있습니다.
            </p>
          </Skill>
        </li>
      </SkillList>
    </Container>
  );
};

export default AboutSkill;
