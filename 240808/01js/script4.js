const userName = document.querySelector("#name");
const userClass = document.querySelector("#class");

const form = document.querySelector("form");

const table = document.querySelector("table");

const removeBtn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tableName = document.createElement("td");
  const tableClass = document.createElement("td");
  const tr = document.createElement("tr");

  tableName.innerText = userName.value;
  tableClass.innerText = userClass.value;

  table.appendChild(tr);
  tr.appendChild(tableName);
  tr.appendChild(tableClass);

  userName.value = "";
  userClass.value = "";

  // removeBtn.addEventListener("click", () => {
  //   tr.parentNode.parentNode.removeChild(tr.parentNode);
  // });
});
