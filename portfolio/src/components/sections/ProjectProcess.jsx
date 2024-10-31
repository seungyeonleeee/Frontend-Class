import React from "react";
import styled from "styled-components";
import ViewMoreButton from "../ViewMoreButton";
import { SectionTitle, ImgBoxLarge, ImgBoxSmall } from "../../util";

const Container = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 50px;
  }
`;
const ProcessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;
const Accordion = styled.div`
  width: 520px;
  ul {
    margin-bottom: 50px;
    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-top: 1px solid var(--bg-light-gray);
      .title {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        .title-inner {
          display: flex;
          align-items: center;
          gap: 30px;
          font: 500 24px/1 "Poppins-Medium";
          span {
            color: var(--bg-dark-gray);
          }
          h4 {
            color: var(--bg-dark-color);
          }
        }
        .title-arrow {
          width: 20px;
          height: 20px;
          svg {
            width: 100%;
            height: 100%;
            stroke: var(--bg-dark-gray);
          }
        }
      }
      .content {
        width: 100%;
        padding: 0 30px 30px;
        p {
          font: 400 16px/1.3 "Pretendard";
          color: var(--bg-dark-gray);
        }
      }
    }
  }
`;
const ImgBox = styled.div`
  width: 597px;
  height: 550px;
  position: relative;
  & > div {
    position: absolute;
    &.img-box-large {
      top: 50%;
      left: 53%;
      transform: translate(-50%, -50%);
      border: 3px solid var(--bg-dark-gray);
    }
    &.img-box-small {
      border: 2px solid var(--bg-dark-gray);
      box-shadow: 30px 30px 50px rgba(0, 0, 0, 0.2);
      &.small01 {
        top: 50%;
        left: 0;
      }
      &.small02 {
        top: 5%;
        right: 0;
      }
    }
  }
`;

const ProjectProcess = () => {
  return (
    <Container>
      <SectionTitle>Process Work</SectionTitle>
      <ProcessWrapper>
        <Accordion>
          <ul>
            <li>
              <div className="title">
                <div className="title-inner">
                  <span>1 /</span>
                  <h4>Planning</h4>
                </div>
                <div className="title-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="content">
                <p>
                  프로젝트 요구사항을 이해하고 명확한 목표를 설정 했습니다.
                  <br />
                  사용자 페르소나를 설정하고, 주요 기능과 페이지 간의 관계를
                  설계했습니다. <br />
                  웹사이트의 구조와 콘텐츠 흐름을 정의하여 <br />
                  사용자 경험이 원활하도록 계획했습니다.
                </p>
              </div>
            </li>
            <li>
              <div className="title">
                <div className="title-inner">
                  <span>1 /</span>
                  <h4>Planning</h4>
                </div>
                <div className="title-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="content">
                <p>
                  프로젝트 요구사항을 이해하고 명확한 목표를 설정 했습니다.
                  <br />
                  사용자 페르소나를 설정하고, 주요 기능과 페이지 간의 관계를
                  설계했습니다. <br />
                  웹사이트의 구조와 콘텐츠 흐름을 정의하여 <br />
                  사용자 경험이 원활하도록 계획했습니다.
                </p>
              </div>
            </li>
            <li>
              <div className="title">
                <div className="title-inner">
                  <span>1 /</span>
                  <h4>Planning</h4>
                </div>
                <div className="title-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div className="content">
                <p>
                  프로젝트 요구사항을 이해하고 명확한 목표를 설정 했습니다.
                  <br />
                  사용자 페르소나를 설정하고, 주요 기능과 페이지 간의 관계를
                  설계했습니다. <br />
                  웹사이트의 구조와 콘텐츠 흐름을 정의하여 <br />
                  사용자 경험이 원활하도록 계획했습니다.
                </p>
              </div>
            </li>
          </ul>
          <ViewMoreButton text="Read More" />
        </Accordion>
        <ImgBox>
          <ImgBoxLarge className="img-box-large" />
          <ImgBoxSmall className="img-box-small small01" />
          <ImgBoxSmall className="img-box-small small02" />
        </ImgBox>
      </ProcessWrapper>
    </Container>
  );
};

export default ProjectProcess;
