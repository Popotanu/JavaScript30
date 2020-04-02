"use strict";
const setValue = elm => {
  const propName = elm.id;
  const sizing = elm.getAttribute("data-sizing") || "";
  const value = elm.value;

  valueStore.style.setProperty(`--${propName}`, `${value}${sizing}`);
};

const targetElements = ["#base", "#blur", "#spacing"];
const valueStore = document.querySelector("body");

window.addEventListener("load", () => {
  targetElements.forEach(elm => {
    setValue(document.querySelector(elm));
  });
});

targetElements.forEach(elm => {
  document.querySelector(elm).addEventListener("change", e => {
    setValue(e.target);
  });
});
