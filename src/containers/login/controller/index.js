import history from "../../../util/history";
import api from "../../../util/api";
import { validateEmail } from "../../../util/validations";
import { notifyWarn } from "../../../components/Message/index";
import { isAuthenticated } from "../../../util/auth";

import * as actions from "../store/actions";

export async function LogIn(login) {
  if (!validateEmail(login.email) || login.email === "") {
    actions.invalidLogin("email");
    notifyWarn("E-mail inválido");
    return;
  }

  if (login.password === "") {
    actions.invalidLogin("password");
    notifyWarn("Senha não pode estar em branco");
    return;
  }

  const body = {
    email: login.email,
    password: login.password,
  };

  const data = await api.post("auth", body);

  localStorage.setItem("TOKEN_KEY", data.token);

  if (localStorage.getItem("credentials")) {
    localStorage.removeItem("credentials");
  }

  const credentials = login.saveCredentials
    ? {
        checked: login.saveCredentials,
        email: login.email,
      }
    : { checked: login.saveCredentials };

  localStorage.setItem("credentials", JSON.stringify(credentials));

  isAuthenticated() ? history.push("/home") : history.push("/login");
  actions.cleanAll();
}
