// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const email = document.querySelector("#userEmail");

//   if (email.value !== "") {
//     let userName = email.value.split("@")[0];
//     const domain = email.value.split("@")[1];
//     // console.log(userName, domain);

//     userName = userName.slice(0, 2);

//     document.querySelector("#result").innerText = `${userName}***@${domain}`;

//     email.value = "";
//   }
// });

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#userEmail");

  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    const domain = email.value.split("@")[1];
    console.log(userName, domain);

    userName = userName.slice(0, 2);

    document.querySelector("#result").innerText = `${userName}***@${domain}`;

    email.value = "";
  }
});