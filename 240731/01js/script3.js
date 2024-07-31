// form 요소 (input 태그) 입력 값은 절대 전역요소를 찾을 수 없음
// event 액션이 발생한 이후에 vlaue 값을 찾아올 수 있음
// passing 단계에서 전역요소 input을 먼저 찾고 끝내기 때문에

const button = document.querySelector("input[type='button']");

const showSales = () => {
  const price = document.querySelector("#price").value;
  const rate = document.querySelector("#rate").value;
  //console.log(price, rate);

  const savePrice = price * (rate / 100);
  const resultPrice = price - savePrice;

  document.querySelector(".bottomInfo p").innerText = `
  상품의 원래 가격은 ${price}원이고, 할인율은 ${rate}% 입니다.
  ${savePrice}원을 절약한 ${resultPrice}원에 구매할 수 있습니다.
  `;
};

button.addEventListener("click", showSales);
