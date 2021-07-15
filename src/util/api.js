import axios from "axios";
import { notifyError } from "../components/Message/index.js";

const client = axios.create({
  baseURL: "http://localhost:8080/",
});

const api = {
  get: async (url, params) => {
    try {
      const { data } = await client.get(url, getConfigs(params));
      return data;
    } catch (error) {
      handleError(error);
      return { success: false };
    }
  },
  post: async (url, body) => {
    try {
      const { data } = await client.post(url, body, getConfigs());
      return data;
    } catch (error) {
      handleError(error);
      return { success: false };
    }
  },
  put: async (url, body) => {
    try {
      const { data } = await client.put(url, body, getConfigs());
      return data;
    } catch (error) {
      handleError(error);
      return { success: false };
    }
  },
  delete: async (url) => {
    try {
      const { data } = await client.delete(url, getConfigs());
      return data;
    } catch (error) {
      handleError(error);
      return { success: false };
    }
  },
};

function getConfigs(params) {
  return {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("TOKEN_KEY"),

      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Content-Type": "application/json;charset=UTF-8",
    },
    params,
  };
}

function handleError(error) {
  const messages = error?.response?.data?.messages;

  if (!messages) {
    notifyError("Não foi possível realizar a ação.");
    return;
  }

  messages.forEach((msg) => {
    notifyError(msg);
  });
}

export default api;
