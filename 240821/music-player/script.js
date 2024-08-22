// 1.
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
let i = 0;

// 7.
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
let num = 0;

// 14.
const audios = frame.querySelectorAll("audio");

// 2.
lists.forEach((list) => {
  // 4.
  const pic = list.querySelector(".pic");
  pic.style.backgroundImage = `url(./img/member${i + 1}.jpg)`;

  // 3.
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  i++;

  // 5.
  const pause = list.querySelector(".txt li:nth-child(1)");
  const play = list.querySelector(".txt li:nth-child(2)");
  const load = list.querySelector(".txt li:nth-child(3)");

  // 6.
  play.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.remove("on");
    // e.target.closest("article").querySelector(".pic").style.animationPlayState =
    //   "paused";
    e.target.closest("article").querySelector("audio").pause();
  });
  load.addEventListener("click", (e) => {
    e.target.closest("article").querySelector(".pic").classList.add("on");
    e.target.closest("article").querySelector("audio").load();
    e.target.closest("article").querySelector("audio").play();
  });
});

// 15.
// 버튼 클릭 시 기존 재생되던 음악 리셋 // 이미지 애니 멈추기
const initMusic = () => {
  for (let audio of audios) {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
    // audio.parentElement.previousElementSibling = .pic
  }
};

// 9. 단락회로평가
let active = 0;
// prev // next 클릭 시 회전
const length = lists.length - 1;

// 12.
// 가운데만 on 클래스 주기
const activation = (index, lists) => {
  // console.log(index, lists);

  for (let list of lists) {
    list.classList.remove("on");
  }

  lists[index].classList.add("on");
};

// 8.
prev.addEventListener("click", () => {
  // 16.
  initMusic();
  num++;
  frame.style.transform = `translate(-50%, -50%) rotate(${num * deg}deg)`;

  // 13.
  active === 0 ? (active = length) : active--;
  activation(active, lists);
  // console.log(active);
});
next.addEventListener("click", () => {
  // 17.
  initMusic();
  num--;
  frame.style.transform = `translate(-50%, -50%) rotate(${num * deg}deg)`;

  // 10.
  active === length ? (active = 0) : active++;
  // console.log(active);

  // 11.
  activation(active, lists);
});
