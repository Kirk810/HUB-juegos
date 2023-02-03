import "./Home.css";
import { initContent } from "../../main";

const template = () => `
<section class="home">
  <h2>Bienvenido señor#<span id="userName"></span></h2>
    <ul class="hub">
      <button id="API">APIpokemon<button>
      <button>Tres en raya<button>
      <button>Quiz<button>
    </ul>
  <a class="back" href="">Log out<a>
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