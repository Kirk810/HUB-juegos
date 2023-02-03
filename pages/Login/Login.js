import "./Login.css";
import { initContent } from "../../main";

const template = () => `
<h2>Introduce tu Nick</h2>
<section class="login">  
  <input type="text" id="loginInput"/>
  <a href="./Home/Home" id="loginBtn">Login</a>
  <div class="item" id="Login"></div>
</section>
`;

const addListeners = () =>{
  const loginInput = document.querySelector("#loginInput");
  document.querySelector("#loginBtn").addEventListener("click", () => {
        localStorage.setItem("user",loginInput.value); 
      });
}

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};