/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
// let counter = 0;

// document.querySelector('div').addEventListener('click', () => {
//   counter++;
//   document.querySelector('div').innerText = counter;
// });
// Taip neveikia:
// document.querySelector('div').innerText = counter;

// document.getElementById('btn_element').addEventListener('click', () => {
//   counter++;
//   document.getElementsByClassName('btn').innerText = counter;
// });

let button = document.getElementById("btn__element"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
