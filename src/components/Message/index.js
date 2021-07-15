import { colorMessage } from "../../util/constants";
import { notify } from "react-notify-toast";

export const notifySuccess = (text) => {
  notify.show(text, "custom", 5000, colorMessage.success);
};

export const notifyInfo = (text) => {
  notify.show(text, "custom", 5000, colorMessage.info);
};

export const notifyWarn = (text) => {
  notify.show(text, "custom", 5000, colorMessage.warn);
};

export const notifyError = (text) => {
  notify.show(text, "custom", 5000, colorMessage.error);
};

export const showMessage = (status, time, message) => {
  const msg =
    status < 400
      ? { label: `${status} - ${message}`, color: colorMessage.success }
      : status >= 400 && status < 500
      ? { label: `${status} - ${message}`, color: colorMessage.warn }
      : { label: `${status} - ${message}`, color: colorMessage.error };
  notify.show(msg.label, "custom", time, msg.color);
};
