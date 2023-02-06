import './style.css'
import {printTemplate as loginTemplate} from "./pages/Login/Login";
import {printTemplate as homeTemplate} from "./pages/Home/Home";
import {printTemplate as headerTemplate} from "./components/Header/Header";
import {printTemplate as apiTemplate} from "./pages/API/API";
import {printTemplate as ticTemplate} from "./pages/Tic/Tic";

export const initContent = (route) => {
  switch (route) {
      case undefined:
        localStorage.getItem("user") ? homeTemplate() : loginTemplate();
          break;
          case "Home":
            homeTemplate();
            break;
          case "API":
            apiTemplate();
            break;
          case "Tic":
            ticTemplate();
            break
          case "Login":
            loginTemplate();
            break;
  }
};

headerTemplate();

initContent();
