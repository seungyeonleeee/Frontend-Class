// // Promise 예제

// // 1
// const result = document.querySelector("#result");
// const order = new Promise((resolve, reject) => {
//   const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");

//   if (coffee !== null && coffee !== "") {
//     result.innerText = `${coffee} 주문 접수`;

//     setTimeout(() => {
//       resolve(coffee);
//     }, 1000);
//   } else {
//     reject("커피를 주문하지 않았습니다.");
//   }
// });

// // 4
// const display = (coffee) => {
//   // then이 매개변수로 resolve(coffee); 를 받기 때문

//   const end = document.querySelector("#end");
//   end.innerText = `${coffee} 준비 완료`;
//   end.classList.add("active");
//   result.classList.add("done");
// };

// // 5
// const showErr = (err) => {
//   console.log(err);
// };

// // 3
// order.then(display).catch(showErr);

// // 2
// // console.log(order); // [[PromiseState]]

// // Promise 단계
// // 1. pending : Promise를 생성하고 실제 실행을 시키기 전, 대기 상태
// // 2. fullfilled : Promise를 통해서 어떤 실행값 혹은 실행문을 정상적으로 실행시킨 상태
// // 3. rejected : Promise를 통해서 실행하고자 했던 요소를 정상적으로 실행시키지 못한 상태

///////////////////////////////

const result = document.querySelector("#result");
const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");

  if (coffee !== null && coffee !== "") {
    result.innerText = `${coffee} 주문 접수`;

    setTimeout(() => {
      resolve(coffee);
    }, 1000);
  } else {
    reject("커피를 주문해주세요.");
  }
});

const display = (coffee) => {
  const end = document.querySelector("#end");
  end.innerText = `${coffee} 준비 완료`;
  end.classList.add("active");
  result.classList.add("done");
};

const showErr = (err) => {
  console.log(err);
};

order.then(display).catch(showErr);
