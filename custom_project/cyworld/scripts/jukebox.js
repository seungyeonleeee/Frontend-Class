// wrapper_header - album_play
const albums = document.querySelectorAll(".album_play");

for (let album of albums) {
  const playBtn = album.querySelector(".fa-play");
  const pauseBtn = album.querySelector(".fa-pause");
  playBtn.addEventListener("click", function (e) {
    e.target.closest(".album_play").querySelector("audio").play();
    this.classList.remove("active");
    pauseBtn.classList.add("active");
  });
  pauseBtn.addEventListener("click", function (e) {
    e.target.closest(".album_play").querySelector("audio").pause();
    this.classList.remove("active");
    playBtn.classList.add("active");
  });
}

// wrapper_body - checkbox
const checkAll = document.querySelector(`input[name="total"]`);
const checkboxes = document.querySelectorAll(`input.checkbox`);

checkAll.addEventListener("change", () => {
  const isChecked = checkAll.checked;
  checkboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (!checkbox.checked) {
      checkAll.checked = false;
    }
  });
});

// wrapper_body - music play
const songs = document.querySelectorAll(".album_table_song");
for (let song of songs) {
  const play = song.querySelector(".fa-play");
  const pause = song.querySelector(".fa-pause");

  play.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}
