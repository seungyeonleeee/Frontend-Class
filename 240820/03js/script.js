/* 
곰 // 19
여우 // 27
사자 // 32
얼룩말 // 41
기린 // 56
*/

// 1.
// const userDataList = [
//   { name: "곰", age: 19 },
//   { name: "여우", age: 27 },
//   { name: "사자", age: 32 },
//   { name: "얼룩말", age: 41 },
//   { name: "기린", age: 56 },
// ];

// const buttons = document.querySelectorAll(".button");
// // console.log(buttons); // [[Prototype]] : NodeList

// // 6.
// const updateList = (filterdList) => {
//   // 9.
//   let listHtml = "";
//   // 7.
//   // 배열에 있는 아이템을 하나씩 찾아서 li안에 넣어야 됨
//   filterdList.forEach((data) => {
//     listHtml += `<li>${data.name} : ${data.age}</li>`;
//   });

//   // 8.
//   document.querySelector(".user_list").innerHTML = listHtml;
// };

// // 3.
// const onClickButton = (e) => {
//   // 4.
//   // 20세, 30세, 40세 버튼을 어떻게 구별할지 => data-age
//   // console.log(e.target.dataset.age);

//   const targetAge = e.target.dataset.age;

//   // 5.
//   const filterdList = userDataList.filter((data) => data.age >= targetAge);
//   // console.log(filterdList);

//   updateList(filterdList);
// };

// // 2.
// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     onClickButton(e);
//   });
// });

const userDataList = [
  { name: "곰", age: 19 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 56 },
];

const buttons = document.querySelectorAll(".button");

const updateList = (filterdList) => {
  let listHtml = "";
  filterdList.forEach((data) => {
    listHtml += `<li>${data.name} : ${data.age}</li>`;
  });

  document.querySelector(".user_list").innerHTML = listHtml;
};

const onClickButton = (e) => {
  const targetAge = e.target.dataset.age;

  const filterdList = userDataList.filter((data) => data.age >= targetAge);

  updateList(filterdList);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    onClickButton(e);
  });
});
