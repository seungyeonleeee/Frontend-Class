const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
//console.log(menuHome, menuGame, menuJukebox);

const contentFrame = document.querySelector("#contentFrame");
//console.log(contentFrame);

const homeChange = () => {
  //console.log("home");
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #000";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};
const gameChange = () => {
  //console.log("home");
  contentFrame.setAttribute("src", "./game.html");
  menuGame.style = "background: #fff; color: #000";
  menuHome.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};
const jukeboxChange = () => {
  //console.log("home");
  contentFrame.setAttribute("src", "./jukebox.html");
  menuJukebox.style = "background: #fff; color: #000";
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #55b2e4; color: #fff";
};
menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
