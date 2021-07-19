import api from "../../../util/api";
import { notifyWarn, notifySuccess } from "../../../components/Message/index";
import * as actions from "../store/actions";

export async function get() {
  const data = await api.get("users_admin");

  if (!data) {
    return;
  }

  actions.setItems(data);
}

export async function create(item) {
  if (item.name.trim() === "") {
    actions.setInvalid("name");
    return notifyWarn("Nome não pode estar em branco");
  }

  if (item.email.trim() === "") {
    actions.setInvalid("email");
    return notifyWarn("Email não pode estar em branco");
  }

  if (item.chapa.trim() === "") {
    actions.setInvalid("chapa");
    return notifyWarn("Chapa não pode estar em branco");
  }

  if (item.password.trim() === "") {
    actions.setInvalid("password");
    return notifyWarn("Senha não pode estar em branco");
  }

  const data = await api.post("users_admin", item);

  if (!data) {
    return;
  }

  notifySuccess("Usuário cadastrado");
  actions.cleanRegister();
  actions.setActiveTab("Search");
}
