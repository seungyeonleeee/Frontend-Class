const trigger = document.querySelector(`input[type="submit"]`);
const form = document.querySelector(`form[name="numberForm"]`);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number01 = document.querySelector(`input[name="number01"]`).value;
  const number02 = document.querySelector(`input[name="number02"]`).value;
  const getGCD = () => {
    const max = number01 > number02 ? number01 : number02;
    let gcd = 0;
    for (let i = 1; i <= max; i++) {
      if (number01 % i === 0 && number02 % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  };
  const resultBox = document.querySelector(".result_box");
  resultBox.innerText = `${getGCD()}`;
});
