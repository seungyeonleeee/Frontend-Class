// geolocation => 사용자의 위치를 파악하기 위한 목적의 API

// getCurrentPosition(succesCB, errorCB, options)

// 1.
const getLocation = document.querySelector("#getLocation");

// 4. succesCallBack
const showPosition = (position) => {
  // 6.
  // showPosition은 getCurrentPosition의 콜백함수

  // console.log(position);
  // GeolocationPosition 객체 (인스턴스) > coords > latitude // longitude

  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

// 5. errorCallBack
const errorPositon = (err) => {
  alert(err.message);
};

// 2.
getLocation.addEventListener("click", () => {
  // window > navigator > geolocation
  // 3.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPositon);
    // getCurrentPosition : 최초의 실행 지점 1개만 가져옴

    // 8.
    const options = {
      enableHighAccuracy: true,
      // enableHighAccuracy : 정교한 위치값
      maximumAge: 0,
      // maximumAge : 위치정보의 유효기간 (밀리초)
      // enableHighAccuracy: true // maximumAge: 0 => 국룰값
      timeout: 5000,
      // timeout : 5초간 기다렸는데 데이터를 못가져오면 다시 새로고침
    };

    // 7. options
    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPositon,
      options
    );
    // watchPosition : 실시간 위치 파악 // 이동 경로 계속 업데이트
    // 메모리, 데이터 공간을 많이 차지
    // 특정 조건을 주기

    setTimeout(() => {
      navigator.geolocation.clearWatch();
      // clearWatch : 30초동안 watchPosition의 위치변화가 없다면 중지
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }
});
