// 1.
const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector(`input[type="range"]`);
const progressCover = document.querySelector(".progress");
const player = document.querySelector(".player");

// 4.
const play = () => {
  playButton.innerText = " || ";
  video.play();
};
const pause = () => {
  playButton.innerText = " ▶ ";
  video.pause();
};

// 3.
const togglePlay = () => {
  // console.log("click");
  video.paused ? play() : pause();
  // paused : 일시정지
};

// 6.
const setVolume = (e) => {
  // console.log(e.target.value);

  video.volume = e.target.value;
  //volume : 볼륨제어
};

// 10.
const formatting = (time) => {
  // console.log(time); // 247.269297 => 이 영상이 가지고 있는 총 시간

  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

// 9.
const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");

  current.innerText = formatting(video.currentTime);
  // currentTime : 영상의 현재 재생되고 있는 시간을 알려주는 속성
  duration.innerText = formatting(video.duration);
  // duration : 영상의 총 재생 시간을 알려주는 속성
};

// 12.
const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  // console.log(progressBar, progressPointer);

  // 13. bar의 width를 백분율로 나타내기
  // 백분율 : 현재값 / 전체기준값 * 100
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;

  progressBar.style.width = `${percent}%`;

  // 14.
  const progressBarWidth = progressCover.clientWidth;
  // console.log(progressBarWidth); // 550px => 100%

  const newPosition = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPosition}px`;
};

// 16.
const videoPoint = (e) => {
  // console.log(e.pageX);
  // console.log(player.offsetLeft);

  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;

  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

// 2.
playButton.addEventListener("click", togglePlay);

// 7.
video.addEventListener("click", togglePlay);

// 8.
video.addEventListener("timeupdate", updateTime);
// timeupdate : 재생되고 있는 시간이 업데이트 된다

// 11.
video.addEventListener("timeupdate", updateProgress);

// 5.
volumeBar.addEventListener("change", setVolume);

// 15.
// 1) 브라우저 창을 기준으로 좌,우,상,하 측면에서 얼만큼 떨어졌는가 알게 해주는 속성 : offset
// 2) 현재 브라우저 내 x좌표값을 찾아오도록 해주는 속성 : pageX
// 3) pageX - offsetLeft = 영상의 전체길이에서 어디를 찍었는지 확인
progressCover.addEventListener("click", (e) => {
  videoPoint(e);
});
