//중첩 for문을 이용해 1부터 25까지 5행 5열 테이블을 만들어라.

//복합대입연산자
let num = 1;
let t = `<table border=1>`;

for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}

t += `</table>`;
document.write(t);
