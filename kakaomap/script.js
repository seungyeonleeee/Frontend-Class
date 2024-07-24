//current position
//geolacation - 웹브라우저의 내장 api 중 하나, 현재위치를 알려줌
const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  //console.log(latitude, longitude);

  //kakao map
  const container = document.querySelector("#map");
  //console.log(container);

  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3,
  };

  const map = new kakao.maps.Map(container, options);

  //olive store info
  const positions = [
    {
      title: "올리브영 강남우성점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울특별시 강남구 강남대로 320",
      img: "./img/img1.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
    {
      title: "올리브영 강남중앙점",
      latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
      address: "서울특별시 강남구 강남대로 374",
      img: "./img/img2.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 9시",
    },
    {
      title: "올리브영 서초타운점",
      latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
      address: "서울특별시 서초구 서초대로78길 32 1층",
      img: "./img/img3.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 9시",
    },
    {
      title: "올리브영 서초대로점",
      latlng: new kakao.maps.LatLng(37.4940977, 127.0158607),
      address: "서울특별시 서초구 서초대로 314",
      img: "./img/img4.jpg",
      info: "영업시간 : 오전 9시 ~ 저녁 8시",
    },
    {
      title: "올리브영 역삼역점",
      latlng: new kakao.maps.LatLng(37.4996723, 127.0342751),
      address: "서울특별시 강남구 역삼동 736",
      img: "./img/img5.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const content = `
      <div class="wrap">
        <div class="info">
          <div class="title">${positions[i].title}</div>
          <div class="body">
            <div class="img">
              <img src="${positions[i].img}" width="73" height="70">
            </div>
            <div class="desc">
              <div class="ellipsis">${positions[i].address}</div>
              <div class="jibun ellipsis">${positions[i].info}</div>
              <div>
                <a target="_blank" href="https://www.oliveyoung.co.kr">쇼핑몰 바로가기</a>
              </div>
            </div>
          </div>
        </div>
      </div>;
    `;

    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });

    //타이틀만 보여지게 할 때
    // const infowindow = new kakao.maps.InfoWindow({
    //   content: positions[i].title,
    // });

    //마우스 오버 이벤트
    // const markeOverListener = (map, marker, infowindow) => {
    //   return () => {
    //     infowindow.open(map, marker);
    //   };
    // };

    // const markeOutListener = (infowindow) => {
    //   return () => {
    //     infowindow.close();
    //   };
    // };

    // kakao.maps.event.addListener(
    //   marker,
    //   "mouseover",
    //   markeOverListener(map, marker, infowindow)
    // );
    // kakao.maps.event.addListener(
    //   marker,
    //   "mouseout",
    //   markeOutListener(infowindow)
    // );
  }

  //kakao marker
  const markerPosition = new kakao.maps.LatLng(latitude, longitude);
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);

  //kakao marker infowindow
  const iwContent =
    '<div class ="label"><span class="left"></span><span class="center">🎈현재위치</span><span class="right"></span></div>';
  const iwPosition = new kakao.maps.LatLng(latitude, longitude);
  // const iwRemoveable = true;
  const infowindow = new kakao.maps.CustomOverlay({
    content: iwContent,
    position: iwPosition,
  });

  infowindow.setMap(map);

  // kakao.maps.event.addListener(marker, "click", function () {
  //   infowindow.open(map, marker);
  // });
};
const errorPosition = (err) => {
  alert(err.message);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
