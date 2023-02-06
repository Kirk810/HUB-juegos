import "./Header.css";

const template = () =>`
<button class="Btn"><img src="/utils/colores.png"></button>
`

function colorCode() {
  let randomColor = '0123456789ABCDEF';
  let finalCode = '#';
  for (var counter = 0; counter < 6; counter++) {
     finalCode = finalCode + randomColor[Math.floor(Math.random() * 16)];
  }
  return finalCode;
}

const addListeners = () =>{
  document.querySelector("button")
  .addEventListener("click" , () => {
    document.body.style.backgroundColor = colorCode();
  })
    }

export const printTemplate = () => {
    document.querySelector("#nav").innerHTML = template();
    addListeners();
  };
