// const userName = document.querySelector("#name");
// const userMajor = document.querySelector("#major");
// // console.log(userName, userMajor);

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (userName.value === "" && userMajor.value === "")
//     alert("정상적인 데이터를 입력하세요");
//   else {
//     const tbody = document.querySelector("tbody");
//     const newTr = document.createElement("tr");

//     // 이름 테이블 데이터 생성
//     const nameTd = document.createElement("td");
//     nameTd.innerText = userName.value;
//     userName.value = "";

//     // 전공 테이블 데이터 생성
//     const majorTd = document.createElement("td");
//     majorTd.innerText = userMajor.value;
//     userMajor.value = "";

//     newTr.append(nameTd);
//     newTr.append(majorTd);
//     tbody.appendChild(newTr);
//   }
// });

// 1. 등록하기 버튼을 클릭하면 이름, 전공 값이 밑으로 출력된다.

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (name.value !== "" && major.value !== "") {
    const name = document.querySelector("#name");
    const major = document.querySelector("#major");

    const tbody = document.querySelector("tbody");
    const newTr = document.createElement("tr");

    const newTd01 = document.createElement("td");
    newTd01.innerText = name.value;
    const newTd02 = document.createElement("td");
    newTd02.innerText = major.value;

    name.value = "";
    major.value = "";

    newTr.appendChild(newTd01);
    newTr.appendChild(newTd02);
    tbody.appendChild(newTr);
  } else {
    alert("값을 입력해주세요");
  }
});
