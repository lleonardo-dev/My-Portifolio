import { animate, scroll } from "motion";

animate(
  "#sobre",
  { scale: [0.5, 1] }, // Isso anima DE 0.5 PARA 1
  { ease: "circInOut", duration: 1 },
);

function falarcomigo() {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
}

function certificacoesjs() {
  document.getElementById();
}

const nameinput = document.querySelector("user.name");
const emailinput = document.querySelector("user.email");
const messageinput = document.querySelector("user.message");
const form = document.querySelector("form");
