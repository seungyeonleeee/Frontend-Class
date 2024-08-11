// navigation
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

menuHome.addEventListener("click", function () {
  contentFrame.setAttribute("src", "./pages/home.html");
  // contentFrame.src = "./pages/home.html";
  this.classList.add("active");
  menuGame.classList.remove("active");
  menuJukebox.classList.remove("active");
});
menuGame.addEventListener("click", function () {
  contentFrame.setAttribute("src", "./pages/game.html");
  // contentFrame.src = "./pages/game.html";
  this.classList.add("active");
  menuHome.classList.remove("active");
  menuJukebox.classList.remove("active");
});
menuJukebox.addEventListener("click", function () {
  contentFrame.setAttribute("src", "./pages/jukebox.html");
  // contentFrame.src = "./pages/jukebox.html";
  this.classList.add("active");
  menuHome.classList.remove("active");
  menuGame.classList.remove("active");
});

// selectEvent
const select = document.querySelector("#emotion");
select.addEventListener("change", function () {
  const selectOption = this.options[this.selectedIndex];
  const selectOptionText = selectOption.innerText;
  const selectOptionIndex = selectOption.index;
  const displayFeel = document.querySelector(".feeling");
  const displayImg = document.querySelector(".profile_img img");

  displayFeel.innerText = selectOptionText;

  const imgs = [
    "profile_img01",
    "profile_img02",
    "profile_img03",
    "profile_img04",
  ];

  if (selectOptionIndex === 0) {
    displayImg.src = `./img/${imgs[0]}.png`;
    displayImg.alt = `profile_img01`;
  } else if (selectOptionIndex === 1) {
    displayImg.src = `./img/${imgs[1]}.png`;
    displayImg.alt = `profile_img02`;
  } else if (selectOptionIndex === 2) {
    displayImg.src = `./img/${imgs[2]}.png`;
    displayImg.alt = `profile_img03`;
  } else {
    displayImg.src = `./img/${imgs[3]}.png`;
    displayImg.alt = `profile_img04`;
  }
});
