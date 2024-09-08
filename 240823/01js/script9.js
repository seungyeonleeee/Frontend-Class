// http://dummyjson.com/quotes

// json 데이터를 가져와 화면에 출력, 새로고침이 될 때마다 랜덤형식으로 출력될 수 있도록
// random() 함수 사용

// // 1
// const quoteURL = "http://dummyjson.com/quotes";
// // "quotes"라는 key 1개

// // 2
// fetch(quoteURL)
//   .then((response) => response.json())
//   .then((data) =>
//     // console.log(data)
//     {
//       // 3
//       const result = document.querySelector("#result");

//       // 4
//       const random = Math.floor(Math.random() * data.quotes.length);

//       // 5
//       result.querySelector(".quote").innerHTML = data.quotes[random].quote;

//       // 6
//       result.querySelector(
//         ".author"
//       ).innerHTML = `- ${data.quotes[random].author} -`;
//     }
//   )
//   .catch((err) => console.log(err));

///////////////////////////////

const quoteURL = "http://dummyjson.com/quotes";

fetch(quoteURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * data.quotes.length);
    result.querySelector(".quote").innerHTML = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerHTML = `- ${data.quotes[random].author} -`;
  })
  .catch((err) => console.log(err));
