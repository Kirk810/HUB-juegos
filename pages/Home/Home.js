import "./Home.css";
import { initContent } from "../../main";

const template = () => `
<a class="back"><img src="/utils/logout.svg"><a>
<section class="home">
  <h2>Welcome<span id="userName"></span></h2>
    <ul class="hub">
      <button id="API"><img src="/utils/287221.png"><button>
      <button id="piedra"><img src="/utils/piedra.png"><button>
      <button>Quiz<button>
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
  }); const tic = document.querySelector("#tic")
  tic.addEventListener("click" , () => {
    initContent("Tic");
  })
    }

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    document.querySelector("#userName").innerHTML = localStorage.getItem("user");
    addListeners();
  };