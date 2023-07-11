const input = document.querySelector(`.text.`);
const button = document.querySelector(`.form-button`);
const container = document.querySelector(`.container`);

let text = n1(Number);
let text2 = n2(Number);
button.addEventListener(`click`, (event) => {
  let element = document.createElement(`li`);
  element.textContent = n1 + n2;
  container.append(element);
  n1.value = null;
  n2.value = null;
});
