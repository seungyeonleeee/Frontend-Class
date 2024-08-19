// 1.
const playButton = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector(`input[type="range"]`);

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

// 2.
playButton.addEventListener("click", togglePlay);

// 7.
video.addEventListener("click", togglePlay);

// 8.
video.addEventListener("timeupdate", updateTime);
// timeupdate : 재생되고 있는 시간이 업데이트 된다

// 5.
volumeBar.addEventListener("change", setVolume);
