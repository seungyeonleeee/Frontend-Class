// 2
const display = (result) => {
  console.log(`${result} 준비 완료`);
};

// 1
const order = (coffee, callback) => {
  console.log(`${coffee} 주문 접수`);
  setTimeout(() => {
    callback(coffee);
  }, 1000);
};

order("아메리카노", display);
