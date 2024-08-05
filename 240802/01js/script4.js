// form 요소 => form 태그 안에 있는 세부적인 태그들을 모두 지칭하는 표현

// 요소.value

// 이미 빈 값을 읽어버림
// const orderName = document.querySelector("#orderName").value;
// console.log(orderName);

//form태그의 action의 주소는 index.html로만 감

//input type="submit"/"button" 차이
//submit은 서버로 전송하고 새로운 값을 다시 받아와야 됨
//type="submit" -> ex) 회원가입 마지막 단계
//"button" -> ex) 다크모드 버튼

const button = document.querySelector("input[type='submit']");
const form = document.querySelector("form");
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("click");
// });

//정석
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("click");
//   // const orderName = document.querySelector("#orderName");
//   //form의 특징 name으로 찾을 수 있음
//   const orderName = document.order.orderName;
//   console.log(orderName.value);
// });

// console.log(document.forms[0].elements[3]);
// 문서객체 내의 forms 속성
// form 요소들만 배열로 찾아옴

const select = document.querySelector("#fruits");
// console.log(select.options[1].value);

select.addEventListener("change", function () {
  //console.log("change");
  //console.log(this.options);
  const seletedText = this.options[this.selectedIndex].innerText;
  //console.log(seletedText);
  //console.log(this.selectedIndex);

  alert(`${seletedText}를 선택하셨습니다. 가격은 5,000원 입니다.`);
});

// const checkbox = document.querySelector("input[name='alarm']:checked");
// console.log(checkbox);

const radioBox = document.querySelectorAll(`input[name="userAge"]`);
// console.log(radioBox);
radioBox.forEach((item) => {
  item.addEventListener("change", (e) => {
    const target = e.target;
    // console.log(target.value);
    if (target.checked) {
      alert(`당신의 연령은 ${target.value}대 입니다.`);
    }
  });
});

const checkBox = document.querySelectorAll(`input[name="alarm"]`);
// console.log(checkBox);
checkBox.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    // console.log(target.value);
    if (target.checked) {
      alert(`당신의 관심은 ${target.value} 입니다!`);
    }
  });
});
