import React from "react";
import styled from "styled-components";
import { wrapper, Inner } from "../../util";

const Container = styled.section`
  position: relative;
  height: 100vh;
  ${wrapper}
`;
const HomeInner = styled(Inner)`
  position: relative;
`;
const MainCharacter = styled.div`
  width: 25%;
  /* height: 350px; */
  svg {
    width: 100%;
    height: 100%;
  }
`;
const LineCharacter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  &.titleGroup {
    position: absolute;
    top: 20%;
    left: 10%;
    h1 {
      font-size: 70px;
      span {
        color: var(--bg-accent-color);
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
      }
    }
    p {
      font-size: 22px;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <LineCharacter>
        <svg
          width="706"
          height="507"
          viewBox="0 0 706 507"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_99_180)">
            <path
              d="M-139.892 -82C-117.669 -46.0125 -60.5082 31.3225 -9.645 52.7621C53.934 79.5616 63.0535 72.3843 98.938 94.1865C128.148 111.933 138.53 134.133 141.276 141.237C145.414 156.061 148.422 189.024 118.513 185.948C98.9775 183.939 99.6709 158.671 111.864 148.185C123.006 138.604 146.282 150.112 167.095 156.673C205.011 168.627 222.663 175.896 242.157 194.16C259.23 210.155 279.456 232.599 292.719 300.49C311.186 395.022 337.827 463.946 420.327 488.5C588.327 538.5 629.403 426 703.403 449.5"
              stroke="#FF481F"
              stroke-width="3"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_99_180">
              <rect width="706" height="507" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </LineCharacter>
      <HomeInner>
        <MainCharacter>
          <svg
            width="332"
            height="306"
            viewBox="0 0 332 306"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150.95 60.4H177.2V272.5C177.2 288.95 173 296.3 161.1 300.5C149.2 304.7 128.9 305.05 98.45 305.05C97.05 297.7 92.5 287.2 88.65 279.85C113.15 280.9 135.55 280.55 142.2 280.2C148.85 279.85 150.95 278.1 150.95 272.15V60.4ZM54.7 1.94998H254.9V25.75H54.7V1.94998ZM246.5 1.94998H253.15L258.75 0.549979L276.95 13.5C250.35 40.45 209.05 67.4 170.9 83.5C167.4 78.25 160.4 70.9 155.85 66.7C189.8 52.7 227.95 27.15 246.5 6.84998V1.94998ZM107.2 101.7H225.5V123.4H107.2V101.7ZM11.3 77.2H89.7V101.35H11.3V77.2ZM100.2 157.35H231.1V179.05H100.2V157.35ZM80.25 214.75H251.4V236.8H80.25V214.75ZM304.25 74.4L324.9 91.55C305.65 113.95 280.1 140.55 260.85 157.7L244.05 143C262.95 125.85 289.2 96.1 304.25 74.4ZM248.6 66.35C260.5 146.15 285.7 218.25 331.2 252.55C324.9 257.8 315.8 267.6 311.25 274.95C263.3 234.35 238.1 158.75 224.45 70.2L248.6 66.35ZM80.25 77.2H85.5L90.4 76.15L106.85 82.45C93.2 170.65 60.65 238.2 20.4 274.6C16.2 269 6.4 259.2 0.45 255.35C39.65 222.1 69.05 160.15 80.25 83.15V77.2Z"
              fill="black"
            />
          </svg>
        </MainCharacter>
        <TextGroup className="titleGroup">
          <h1>
            <span>이을</span> 승
          </h1>
          <p>서로의 이야기를 이어 공감을 쌓아갑니다.</p>
        </TextGroup>
      </HomeInner>
    </Container>
  );
};

export default Home;
