//music play
const songs = document.querySelectorAll(".albumTable_song");
//console.log(songs); //NodeList

//반복문
// songs.forEach((song) => {
//   console.log(song);
// });

//유사배열에 많이 사용하는 반복문
for (let song of songs) {
  //console.log(song);

  //재생, 일시정지 버튼 찾기
  const play = song.querySelector(".fa-caret-right");
  const pause = song.querySelector(".fa-pause");
  //console.log(play, pause);

  play.addEventListener("click", (e) => {
    //부모(td)를 먼저 찾고 그 자식 (audio) 찾기
    //console.log(e.target.closest("td").querySelector("audio"));
    //event객체 - target이 중요 - closest() 가장 가까운 요소 찾기 - 그의 자식 찾기
    e.target.closest("td").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

// e객체 => target || currentTarget
//currentTarget : 이벤트 핸들러가 부착되어진 요소를 의미
//target : 실제 이벤트가 발생된 요소를 의미
