import api from "../../../util/api";
import * as actions from "../store/actions";

export async function get() {
  const data = await api.get("occurrences_admin");

  if (!data) {
    return;
  }

  actions.setItems(data);
}

export async function getOnly(id) {
  const data = await api.get(`occurrences_admin/${id}`);

  if (!data) {
    return;
  }

  actions.setItems(data);
}

export async function update(id) {
  const data = await api.put(`occurrences_admin/${id}`);

  if (!data) {
    return;
  }
}
