const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`Pleace check your class names, there is no ${selector}`);
};

const links = getElement(".nav-links");
const navBtnDOM = getElement(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
