// 4
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 50px;
  background: rgba(240, 255, 255, 0.6);
  border: 3px solid azure;
  border-radius: 28px;
`;
const City = styled.h1`
  font-size: 22px;
`;
const Weather = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;
const Desc = styled.h3`
  font-size: 26px;
`;

const WeatherBox = ({ weather }) => {
  // 21 날씨 정보 출력
  // console.log(weather);

  // 22
  let cityName;
  switch (weather?.name) {
    case "Jamwon-dong":
      cityName = "서울시 잠원동";
      break;
    case "Paris":
      cityName = "프랑스 파리";
      break;
    case "New York":
      cityName = "미국 뉴욕";
      break;
    case "Tokyo":
      cityName = "일본 도쿄";
      break;
    case "Seoul":
      cityName = "대한민국 서울";
      break;
  }
  let weatherMain;
  switch (weather?.weather[0].main) {
    case "Clear":
      weatherMain = "오늘 날씨 맑음";
      break;
    case "Clouds":
      weatherMain = "오늘 날씨 구름";
      break;
    case "Mist":
      weatherMain = "오늘 날씨 안개";
      break;
    case "Rain":
      weatherMain = "오늘 날씨 비옴";
      break;
  }

  return (
    // 초기값이 null이라 못찾아오기 때문에 weather?
    <Wrapper>
      <City>
        🎈 도시 : {/* {weather && weather?.name} */}
        {cityName}
      </City>
      <Weather>
        🌞 온도 : {weather && weather?.main.temp}℃ / 습도 :{" "}
        {weather && weather?.main.humidity}%
      </Weather>
      <Desc>
        🌈 현재 날씨 : {/* {weather && weather?.weather[0].main} */}
        {weatherMain}
      </Desc>
    </Wrapper>
  );
};

export default WeatherBox;
