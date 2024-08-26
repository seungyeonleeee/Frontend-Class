// 9.
import env from "./env.js";

// 7.
const getCurrentWeather = (latitude, longitude) => {
  // 8. openweathermap api 주소
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.API_KEY}&units=metric`;

  // API key
  // 새파일로 따로 만들기 (키가 오픈되는건 좋지않음 => 개인정보)
  // .gitignore => github에 올라가지 않음

  // 10.
  fetch(URL)
    .then((reponse) => reponse.json())
    .then((data) => {
      // 11.
      console.log(data);

      // 12.
      const icon = document.querySelector(".icon");
      const temp = document.querySelector(".temp");
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");

      // 15.
      let weatherName;
      switch (data.weather[0].main) {
        // data?.weather[0]?.main
        // ? => React에서 씀
        // ? 앞에 있는 데이터가 존재한다면 뒤에를 가져와라
        case "Clouds":
          weatherName = "구름";
          break;

        case "Rain":
          weatherName = "비";
          break;
      }

      // 18.
      let cityName;
      switch (data.name) {
        case "Jamwon-dong":
          cityName = "서울시 잠원동";
          break;
      }

      // 20.
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      // 13.
      // 섭씨 // 화씨
      // &units=metric => API에 붙이기
      temp.innerText = `${data.main.temp}℃`;

      // 14.
      // weather
      // weather.innerText = `${data.weather[0].main}`;
      // 16.
      weather.innerText = weatherName;

      // 17.
      // city
      // city.innerText = data.name;
      // 19.
      city.innerText = cityName;
    });
};

// // 1. openweathermap api 주소
// const URL =
//   "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

// 2. 위치를 찾아오는 함수
const getPosition = (position) => {
  // 6.
  // position 객체 상속
  // console.log(position.coords);
  // 구조분해할당
  const { latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);
};

// 3. 정상적으로 데이터를 찾아오지 못하는 상황
const errorHandler = (err) => {
  // 5.
  // err 객체 상속
  const notice = document.querySelector(".notice");
  notice.style.display = "block";
  alert(err.message);
};

// 4. 예외조항처리
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("Geolocation id not Available!");
}
