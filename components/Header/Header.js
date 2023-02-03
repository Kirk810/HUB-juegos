import "./Header.css";
import { initContent } from "../../main";

const template = () =>`
<button class="my-btn">
<h4>Cambia Fondo</h4>
</button>
`

function colorCode() {
  let randomColor = '0123456789ABCDEF';
  let finalCode = '#';
  for (var counter = 0; counter < 6; counter++) {
     finalCode =finalCode + randomColor[Math.floor(Math.random() * 16)];
  }
  return finalCode;
}

const addListeners = () =>{
  document.querySelector("button")
  .addEventListener("click" , () => {
    document.body.style.backgroundColor = colorCode();
  }); initContent("body");
    }

export const printTemplate = () => {
    document.querySelector("#nav").innerHTML = template();
    addListeners();
  };
