// break문
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;

//   document.write(i, "<br/>");
// }
// document.write("=== The End ===");

//continue문
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;

  document.write(i, "<br/>");
}
document.write("=== The End ===");
