import api from "../../../util/api";
import { notifyWarn, notifySuccess } from "../../../components/Message/index";
import * as actions from "../store/actions";

export async function get() {
  const data = await api.get("occurrences_admin");

  if (!data) {
    return;
  }

  actions.setItems(data);
}
