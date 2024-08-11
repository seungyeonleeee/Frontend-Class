// // appendChild()

// const container = document.querySelector(".container");

// const newP = document.createElement("p");

// const textNode = document.createTextNode("Typescript");

// newP.appendChild(textNode); // 텍스트도 자식요소

// // console.log(newP);

// container.appendChild(newP);

// ///////////////////////

// // insertBefore()

// const newP02 = document.createElement("p");
// const textNode02 = document.createTextNode("React.js");
// newP02.appendChild(textNode02);

// const basisNode = document.querySelectorAll("p")[2];
// // console.log(basisNode);

// container.insertBefore(newP02, basisNode);

// ///////////////////////

// // remove()

// // const target = document.querySelectorAll("p")[0];
// // target.addEventListener("click", function () {
// //   this.remove();
// // });

// ///////////////////////

// // parentNode() / removeChild()

// const items = document.querySelectorAll("p");
// items.forEach((item) => {
//   item.addEventListener("click", function () {
//     // console.log(this);
//     this.parentNode.removeChild(this);
//   });
// });

const container = document.querySelector(".container");

const newP = document.createElement("p");

const textNode = document.createTextNode("Typescript");

newP.appendChild(textNode);
// console.log(newP);

container.appendChild(newP);

const newP02 = document.createElement("p");

const textNode02 = document.createTextNode("React.js");

newP02.appendChild(textNode02);

const basisNode = document.querySelectorAll("p")[2];
console.log(basisNode);

container.insertBefore(newP02, basisNode);

const items = document.querySelectorAll("p");
items.forEach((item) => {
  item.addEventListener("click", function () {
    // console.log(this);
    this.parentNode.removeChild(this);
  });
});
