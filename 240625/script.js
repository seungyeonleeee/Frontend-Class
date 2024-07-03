//과정 정리
// 1. card_items 각 요소에 마우스를 오버하면, 각 item들이 위쪽으로 올라오도록 하고 싶다
// 1-1. 웹 브라우저가 card_item들이 어떤 요소들인지 알게끔 도와줘야 한다
// 1-1-1. 웹 브라우저는 DOM 객체 모델을 갖고 있으니까 해당 DOM에서 card_item들의 Node를 찾아와야겠다
// 1-1-1-1. DOM에서 원하는 Node를 찾아오려면 quertySelector() 혹은 getElementById() 등의 함수를 사용할 수 있다
// 1-2. card_item이 1개가 아니라, 총 5개이며, 이 5개 모두 동일한 패턴 및 형식의 동적인 이벤트 기능을 가져야 한다 (반복문)
// 2. 만약 마우스가 A item 위에 있다가, B item으로 이동하게 된다면,  A item은 다시 원래의 위치로 돌아오게 하고싶고, B item은 위쪽으로 올라오게 하고 싶다

const items = document.querySelectorAll("#card_items li");
// console.log(items);

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    // console.log("mousevoer ok");
    item.style.transform = "translateY(-20px)";
    item.style.transition = "all .3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateY(0)";
  });
});

//과정 정리
// 1. 컴퓨터에게 상단 nav ul & li 태그를 인지 시켜줘야 한다
// 2. 상단 nav요소에게 마우스를 오버하면 이벤트가 실행된다
// 2-1. active 가상클래스 실행된다 (텍스트가 검정색 & bold)
// 2-2. 하단에 lnb요소의 opacity value가 1이 되어야 한다
// 3. mouseleave || mouseout 기능을 활용해서 마우스가 옆에 있는 li 태그로 이동을 하면 기존 이벤트는 제거 // 신규 이벤트가 이전에 설정했던 기능을 그대로 구현한다!!

const gnbLi = document.querySelectorAll(".topNav > li");
// console.log(gnbLi);
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    // console.log("mouseover ok");
    const aTag = li.querySelector("a");
    // 조건문
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });

  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

// background image change
// 배열 활용

// 배경이미지 배열로 만들기
const bgImgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];

// 대상 가져오기
//배경이미지
const bgImg = document.querySelector("#background_img");
//console.log(bgImg);
//카드아이템
//const items = document.querySelectorAll("#card_items li");

// 배경이미지 넣기
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)),
    url(./img/${bgImgs[0]})`;

//텍스트 대상 찾기
const topContents = document.querySelector("#top_contents");
const contentTit = topContents.querySelector(".top_contents_title");
const contentDesc = topContents.querySelector(".top_contents_desc");

//json의 데이터 찾아오기
fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;
    //console.log(firstData);

    contentTit.innerText = firstData.title;
    contentDesc.innerText = firstData.description;

    // 클릭했을 때 이벤트
    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        //console.log("click me");
        //console.log(e);
        e.preventDefault(); //a태그가 이동하는걸 막아주기 위해

        //텍스트 바꾸기
        const { title, description } = jsonData.data[index];
        //console.log(title, description);
        contentTit.innerText = title;
        contentDesc.innerText = description;

        //배경이미지 바꾸기
        bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)),
    url(./img/${bgImgs[index]})`;
      });
    });
  });
