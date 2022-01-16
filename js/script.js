let firstForm = document.querySelectorAll(".firstForm")[0];
let secForm = document.querySelectorAll(".secForm")[0];
let thirdForm = document.querySelectorAll(".thirdForm")[0];
let dolar = document.querySelectorAll(".dolar")[0];
let form = document.querySelectorAll(".form")[0];
let inputValue = document.querySelectorAll(".inputValue")[0];
let selectFrom = document.querySelectorAll(".selectFrom")[0];
let selectTo = document.querySelectorAll(".selectTo")[0];
let upper = document.querySelectorAll(".upper")[0];
let lower = document.querySelectorAll(".lower")[0];
let showOne = document.querySelectorAll(".showOne")[0];
let showTwo = document.querySelectorAll(".showTwo")[0];
let showOnes = document.querySelectorAll(".showOnes")[0];
let showTwos = document.querySelectorAll(".showTwos")[0];
let showThree = document.querySelectorAll(".showThree")[0];
let showThrees = document.querySelectorAll(".showThrees")[0];
let showFour = document.querySelectorAll(".showFour")[0];
let showFours = document.querySelectorAll(".showFours")[0];
let showFive = document.querySelectorAll(".showFive")[0];
let showFives = document.querySelectorAll(".showFives")[0];
let menuBarr = document.querySelectorAll(".menuBarr")[0];
let afterMenu = document.querySelectorAll(".afterMenu")[0];
let middle = document.querySelectorAll(".middle")[0];
let menuIcons = document.querySelectorAll(".menuIcons")[0];
let childBody = document.querySelectorAll(".childBody")[0];
let menuPopUp = document.querySelectorAll(".menuPopUp")[0];
let sendMoney = document.querySelectorAll(".sendMoney")[0];
let API = document.querySelectorAll(".API")[0];
let apiPop = document.querySelectorAll(".apiPop")[0];
let toolPop = document.querySelectorAll(".toolPop")[0];
let resourcePop = document.querySelectorAll(".resourcePop")[0];
let TOOL = document.querySelectorAll(".TOOL")[0];
let RES = document.querySelectorAll(".RES")[0];
let signPop = document.querySelectorAll(".signPop")[0];
let SIGN = document.querySelectorAll(".SIGN")[0];

let fun = (a, b, c) => {
  c.innerHTML += `<option value="${a}">${b}</option>`;
};

for (const x in exRate.rates) {
  let value = exRate.rates[x];
  let name = x;
  fun(value, name, secForm);
  fun(value, name, thirdForm);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = Number(inputValue.value);
  let from = selectFrom.value;
  let to = selectTo.value;
  let turnFrom = from.replace(",", "");
  let turnTo = to.replace(",", "");
  let turnedFrom = parseFloat(turnFrom);
  let turnedTo = parseFloat(turnTo);
  let turnMM = value * turnedFrom;
  let divideResult = turnMM / turnedTo;
  let finalResult = divideResult.toFixed();
  document.querySelectorAll(`.selectTo [value]`).forEach((element) => {
    let first = element.value;
    let second = element.innerHTML;
    document.querySelectorAll(`.selectFrom [value]`).forEach((element) => {
      let tt = element.value;
      let ss = element.innerHTML;
      if (tt === from && first === to) {
        upper.innerHTML = `	<div class="customOne">${value} ${ss} =</div>
					<div class="custom">${finalResult} ${second}  </div>
				`;
      }
    });
  });
  inputValue.value = "";
  inputValue.focus();
});

let showOff = (x, y) => {
  x.addEventListener("click", () => {
    y.classList.toggle("fa-chevron-down");
  });
};
showOff(showOne, showOnes);
showOff(showTwo, showTwos);
showOff(showThree, showThrees);
showOff(showFour, showFours);
showOff(showFive, showFives);

menuBarr.addEventListener("click", () => {
  afterMenu.classList.toggle("dBlock");
  middle.classList.toggle("dNone");
  menuIcons.classList.toggle("fa-remove");
  menuIcons.classList.toggle("fa-bars");
  childBody.classList.toggle("scrollHidden");
});

let navShow = (x, y) => {
  x.addEventListener("mouseover", () => {
    y.classList.add("dBlock");
  });
  x.addEventListener("mouseout", () => {
    y.classList.remove("dBlock");
  });
};
navShow(menuPopUp, sendMoney);
navShow(apiPop, API);
navShow(toolPop, TOOL);
navShow(resourcePop, RES);
navShow(signPop, SIGN);

let navBarShow = (x) => {
  x.addEventListener("mouseover", () => {
    x.classList.add("dBlock");
    console.log("hhh");
  });
  x.addEventListener("mouseout", () => {
    x.classList.remove("dBlock");
  });
};
navBarShow(sendMoney);
navBarShow(API);
navBarShow(TOOL);
navBarShow(RES);
navBarShow(SIGN);
