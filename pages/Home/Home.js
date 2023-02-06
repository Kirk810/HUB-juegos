import "./Home.css";
import { initContent } from "../../main";

const template = () => `
<a class="back">Log out<a>
<section class="home">
  <h2>Bienvenido señor#<span id="userName"></span></h2>
    <ul class="hub">
      <button id="API"><img src="/utils/287221.png"><button>
      <button id="tic"><img src="/utils/tictactoe.png"><button>
      <button>Quiz<button>
    </ul>
</section>
`

const addListeners = () =>{
  document.querySelector(".back")
  .addEventListener("click" , () => {
    localStorage.removeItem("user"); initContent("Login");
  }); document.querySelector("#API").addEventListener("click" , () => {
    initContent("API");
  })
    }

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    document.querySelector("#userName").innerHTML = localStorage.getItem("user");
    addListeners();
  };