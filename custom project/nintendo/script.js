//gender_btn
const femaleBtn = document.getElementById("femalebtn");
const maleBtn = document.getElementById("malebtn");
femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.querySelector("i").classList.toggle("filledA");
  maleBtn.querySelector("i").classList.remove("filledB");
});
maleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtn.querySelector("i").classList.toggle("filledB");
  femaleBtn.querySelector("i").classList.remove("filledA");
});

//error
const signupButton = document.querySelector(".signup_btn");
signupButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;

  let isValid = true;

  if (email.includes("@") === false) {
    document.querySelector("#error_email").innerText =
      "이메일을 정상적으로 입력해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_email").innerText = "";
  }
  if (name === "") {
    document.querySelector("#error_name").innerText =
      "이름을 정상적으로 입력해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_writer").innerText = "";
  }
  if (password2 === "") {
    document.querySelector("#error_password1").innerText =
      "비밀번호를 정상적으로 입력해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_password1").innerText = "";
  }
  if (password1 !== password2) {
    document.querySelector("#error_password2").innerText =
      "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }

  if (isValid === true) {
    alert("회원가입을 축하합니다.");
  }
});
