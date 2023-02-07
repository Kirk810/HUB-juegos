import "./Home.css";
import { initContent } from "../../main";

const template = () => `
<a class="back"><img src="/utils/logout.svg"><a>
<section class="home">
  <h2>Welcome ${localStorage.getItem (["user"])}</h2>
    <ul class="hub">
      <button id="API"><img src="/utils/287221.png"><button>
    </ul>
</section>
`

const addListeners = () =>{
  const back = document.querySelector(".back")
  back.addEventListener("click" , () => {
    localStorage.removeItem("user"); initContent("Login");
  }); const pok = document.querySelector("#API")
  pok.addEventListener("click" , () => {
    initContent("API");
  }); /*const tic = document.querySelector("#piedra")
  tic.addEventListener("click" , () => {
    initContent("Piedra");
  })*/
    }

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners();
  };