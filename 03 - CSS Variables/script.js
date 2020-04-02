"use strict";
const valueStore = document.documentElement;

const updateEffect = elm => {
  const sizing = elm.dataset.sizing || "";
  valueStore.style.setProperty(`--${elm.name}`, `${elm.value}${sizing}`);
};

const inputs = document.querySelectorAll(".input");

inputs.forEach(input => window.addEventListener("load", updateEffect(input)));
inputs.forEach(input => {
  input.addEventListener("change", e => updateEffect(e.target));
});
