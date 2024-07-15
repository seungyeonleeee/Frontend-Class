const trigger = document.querySelector(".trigger");
//console.log(trigger);
trigger.addEventListener("click", function () {
  //console.log("click");
  const gnb = document.querySelector(".gnb ul");
  const sns = document.querySelector(".sns");
  //console.log(gnb, sns);
  gnb.classList.toggle("on");
  sns.classList.toggle("on");
  this.classList.toggle("active");
});
