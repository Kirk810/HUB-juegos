import "./Login.css";
import { initContent } from "../../main";

const template = () => `
<h2>Introduce tu Nick</h2>
<section class="login">  
  <input type="text" id="loginInput"/>
  <a id="loginBtn">Login</a>
</section>
`;

const addListeners = () =>{
  const loginInput = document.querySelector("#loginInput");
  document.querySelector("#loginBtn").addEventListener("click", () => {
        localStorage.setItem("user",loginInput.value); 
        initContent("Home");
      });
}

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};