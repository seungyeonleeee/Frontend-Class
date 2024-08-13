// 1. 사용자로부터 input태그를 통해서 입력값을 받는다.

// 2. 입력값이 확인되면, ul태그 자식요소로 하나씩 추가해준다.

// 3. ul태그 자식요소 중 삭제 버튼을 클릭했을 때, 버튼을 포함하고 있는 부모 요소를 확인 후 같이 삭제해준다.

////////// 로컬스토리지 //////////
// 4. 사용자가 입력한 값이 영구적으로 보관될 수 있도록 localstorage를 활용해서 값을 저장시킨다.

// 5. 사용자가 값을 입력하면 다이렉트로 UI화면에 출력되는 것이 아니라, 이제부터는 localstorage 안에 저장된 값을 찾아와서 UI화면에 출력한다.

// 6. 삭제 버튼을 클릭한다면, 직접적으로 UI화면 내 값을 삭제해주는 것이 아니라, localstorage 값을 먼저 삭제 후 삭제가 업데이트 된 값을 UI화면에 출력시켜준다.

const form = document.querySelector("form");
const input = document.querySelector(`input[type="text"]`);
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  // localStorage.setItem(`todos`, todos);
  // 웹브라우저는 json을 읽지 못해서 object로 나옴

  localStorage.setItem(`todos`, JSON.stringify(todos));
  // 객체를 제이슨 데이터로 변환
};

const delItem = (e) => {
  // console.log(e.target);
  // console.log(e.currentTarget);
  const target = e.target.parentElement;
  // console.log(target);
  // target.remove();

  todos = todos.filter(
    (todo) =>
      // todo.id !== target.id;
      todo.id != target.id
    // 삭제버튼을 클릭한 애 빼고 다시 배열 만들기
    // 이때 엄격한 비교가 안되는 이유!! 자료형 숫자랑 문자이기 때문
  );
  // filter = 배열안에 특정 아이템을 찾아와서 제거 (특정 조건에 참인 데이터를 다시 새로운 배열로 생성)

  save();
  target.remove();
};

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = `삭제`;
    button.addEventListener("click", delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);

    // 1. 로컬스토리지에 저장된 값 찾아오기
    li.id = todo.id;
    // 일리먼트 liㅔ에 id 생성
  }
};

const handler = (e) => {
  e.preventDefault();

  const todo = {
    id: Date.now(), // new Date()
    text: input.value,
  };

  todos.push(todo);
  addItem(todo);

  save();

  input.value = "";
};

// 2.
const init = () => {
  // 제이슨 데이터를 객체로 변환
  const userTodos = JSON.parse(localStorage.getItem(`todos`));
  if (userTodos) {
    // forEach는 배열에서만 가능해서 조건문 주기
    userTodos.forEach((todo) => {
      addItem(todo);
    });
    todos = userTodos;
  }
};

init();

form.addEventListener("submit", handler);

console.log(todos);

// 로컬스토리지
// : 반영구 // 삭제가 되지 않는다면 // 무한정 X => 최소한의 데이터 저장공간

// 세션스토리지
// : 임시 // 웹브라우저가 작동 // 컴퓨터 실행

// 로컬스토리지에 데이터를 저장하는 방법
// localStorage.setItem("Hello", "World");

// 로컬스토리지 안에 있는 데이터를 가져오는 방법
// const myData = localStorage.getItem("Hello");
// console.log(myData); //World

// 로컬스토리지 안에 있는 데이터를 삭제하는 방법
