// 1. 카카오 api

// 3.
const showPosition = (position) => {
  // 17. 공공데이터 포털
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=Cz7F0oSXtwSXRcI%2BX5HAsvTemIVt%2BcHtyAVU8MJjEzNDl%2FN7gfJmS5DDmAfpeq8FDvpM2l0ciJMLJNi9Vg3DsQ%3D%3D&_type=json";

  // 18.
  fetch(url)
    .then((response) => response.json())
    .then((json) =>
      // console.log(json)
      {
        // 19.
        const data = json.response.body.items.item;
        // console.log(data);

        // 5.
        // console.log(position);
        const { latitude, longitude } = position.coords;

        // 6. 지도 생성하기
        const mapContainer = document.querySelector("#map"); // 지도를 표시할 div
        const mapOption = {
          center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 13. 마커 클러스터러 사용하기
        // 앱키 뒤에 &libraries=clusterer 추가
        // 마커 클러스터러를 생성합니다
        const clusterer = new kakao.maps.MarkerClusterer({
          map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
          averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel: 10, // 클러스터 할 최소 지도 레벨
        });

        // 9. 여러개 마커 표시하기
        // 마커를 표시할 위치와 title 객체 배열입니다
        // const positions = [
        //   {
        //     title: "이젠아카데미",
        //     latlng: new kakao.maps.LatLng(latitude, longitude),
        //   },
        //   {
        //     title: "그린아카데미",
        //     latlng: new kakao.maps.LatLng(37.5001513, 127.0290763),
        //   },
        //   {
        //     title: "SBS아카데미",
        //     latlng: new kakao.maps.LatLng(37.4979437, 127.0265374),
        //   },
        //   {
        //     title: "코리아IT아카데미",
        //     latlng: new kakao.maps.LatLng(37.4999467, 127.0354264),
        //   },
        //   {
        //     title: "하이미디어아카데미",
        //     latlng: new kakao.maps.LatLng(37.4987358, 127.0266779),
        //   },
        // ];

        // 15.
        let markers = [];

        // 20. positions => data 수정
        for (let i = 0; i < data.length; i++) {
          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX), // 마커를 표시할 위치
          });

          // 16.
          markers.push(marker);
          // 줌 아웃해보면 클러스터러 나옴

          // 10.
          const infowindow = new kakao.maps.InfoWindow({
            content: data[i].facltNm,
          });

          // 12.
          const makeOverListener = (map, marker, infowindow) => {
            return () => {
              infowindow.open(map, marker);
            };
          };

          const makeOutListener = (infowindow) => {
            return () => {
              infowindow.close();
            };
          };

          // 11.
          kakao.maps.event.addListener(
            marker,
            "mouseover",
            makeOverListener(map, marker, infowindow)
          );
          kakao.maps.event.addListener(
            marker,
            "mouseout",
            makeOutListener(infowindow)
          );

          // 14.
          // 클러스터러에 마커들을 추가합니다
          clusterer.addMarkers(markers);
        }
      }
    );

  // // 7. 마커 생성하기
  // // 마커가 표시될 위치입니다
  // const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  // // 마커를 생성합니다
  // const marker = new kakao.maps.Marker({
  //   position: markerPosition,
  // });

  // // 마커가 지도 위에 표시되도록 설정합니다
  // marker.setMap(map);

  // // 8. 마커에 클릭 이벤트 등록하기
  // // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
  // const iwContent =
  //   '<div style="padding:5px;"><a href="https://www.naver.com" target="_blank">현재 위치</a></div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  // const iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

  // // 인포윈도우를 생성합니다
  // const infowindow = new kakao.maps.InfoWindow({
  //   content: iwContent,
  //   removable: iwRemoveable,
  // });

  // // 마커에 클릭이벤트를 등록합니다
  // kakao.maps.event.addListener(marker, "click", function () {
  //   // 마커 위에 인포윈도우를 표시합니다
  //   infowindow.open(map, marker);
  // });
};

// 4.
const errorPosition = (err) => {
  alert(err.message);
};

// 2.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다!");
}
