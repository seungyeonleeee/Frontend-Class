// XMLHttpRequest()
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "student-6.json");
// xhr.send();

// const renderHTML = (students) => {
//   let output = "";
//   for (let student of students) {
//     output += `
//     <h2>${student.name}</h2>
//     <ul>
//       <li>전공 : ${student.major}</li>
//       <li>학년 : ${student.grade}</li>
//     </ul>
//     `;
//   }

//   document.querySelector("#result").innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     // console.log(students);

//     renderHTML(students);
//   }
// };

// fetch()
// fetch("student-6.json");
// console.log(fetch("student-6.json")); // Promise
// fetch() 의 반환값이 Promise() => fetch는 Promise의 진화

fetch("student-6.json")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
    let output = "";
    json.forEach((student) => {
      output += `
       <h2>${student.name}</h2>
       <ul>
          <li>전공 : ${student.major}</li>
          <li>학년 : ${student.grade}</li>
       </ul>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  })
  .catch((err) => console.log(err));
