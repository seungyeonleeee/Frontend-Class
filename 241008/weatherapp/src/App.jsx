import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
// 30 로딩스피너
import { ClipLoader } from "react-spinners";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url("https://images.theconversation.com/files/442675/original/file-20220126-17-1i0g402.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop")
    center/cover no-repeat; */
  /* // 45 */
  background: ${({ img }) => `url(${img}) `} center/cover no-repeat;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// 3 환경변수 가져오기
const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
// 빌드도구 쓰지 않았을 때는 process.env.REACT_APP_API_KEY\

// 38
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
  // 8
  const [weather, setWeather] = useState(null);

  // 15 어떤 도시가 클릭되는지 알기 위한 state
  const [city, setCity] = useState("");

  // 32
  const [loading, setLoading] = useState(true);

  // 41
  const [background, setBackground] = useState(null);

  // 11
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
    // &units=metric : 온도를 섭씨도 바꾸는 미터법

    // 33
    setLoading(true);

    const response = await fetch(url);
    // 1
    const data = await response.json();
    // console.log(data);

    // 9
    setWeather(data);

    // 34
    setLoading(false);
  };

  // 내 위치 가져오기
  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let lat = coords.latitude;
      let lon = coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  // 19 도시의 API 정보를 가져오는 함수
  const getWeatherByCity = async () => {
    // 28
    try {
      // 19
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;

      // 35
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);

      // 29
      setWeather(data);

      // 36
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  // 24
  const handleCityChange = (city) => {
    if (city === "") setCity(null);
    else setCity(city);
  };

  // 39 새로고침 시 배경화면 바뀌게 하는 함수
  const getBackground = () => {
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_KEY}`;
    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) =>
        // console.log(data)
        // <Wrapper/>에게 full값을 주기 위해 state 생성해야 함
        // 42
        setBackground(full)
      );
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // // 18
  // useEffect(() => {
  //   // console.log("city", city);

  // // 20
  //   getWeatherByCity();
  // }, [city]);

  // 23 useEffect 합치기
  useEffect(() => {
    if (city === "") {
      // 최초 마운트
      getCurrentLocation();
      // 40
      getBackground();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // 44
  // console.log(background);

  return (
    <>
      <GlobalStyles />
      <Wrapper
        // 43
        img={background}
      >
        <Contents>
          {/* // 31 */}
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
          {/* // 5 */}
          <WeatherBox
            // 10
            weather={weather}
          />
          {/* // 7 */}
          <WeatherButton
            // 12
            cities={cities}
            // 16
            setCity={setCity}
            // 25
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </>
  );
};

export default App;
