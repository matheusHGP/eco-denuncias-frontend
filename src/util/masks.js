import moment from "moment";

export function maskCPF(value) {
  if (value !== undefined) {
    let newValue = value
      .toString()
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    return newValue;
  }
}

export function removeMaskCPF(value) {
  if (value !== undefined) {
    var newValue = value
      .toString()
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1$2")
      .replace(/(\d{3})(\d)/, "$1$2")
      .replace(/(\d{3})(\d{1,2})/, "$1$2")
      .replace(/(-\d{2})\d+?$/, "$1");
    return newValue;
  }
}

export function maskCEP(value) {
  var newValue = value.toString().replace(/\D/g, "");
  newValue = newValue.replace(/(\d{5})(\d{3})/, "$1-$2");
  return newValue;
}

export function removeMaskCEP(value) {
  var newValue = value.toString();
  newValue = newValue.replace("-", "");
  return newValue;
}

export function maskCellphone(value) {
  var newValue = value.toString().replace(/\D/g, "");
  newValue = newValue.replace("-", "");
  var isCellphone = newValue.length === 9 ? true : false;

  if (isCellphone) {
    newValue = newValue.replace(/(\d{5})(\d{4})/, "$1-$2");
    return newValue;
  } else {
    newValue = newValue.replace(/(\d{4})(\d{4})/, "$1-$2");
    return newValue;
  }
}

export function removeMaskCellphone(value) {
  var newValue = value.toString();
  newValue = newValue.replace("-", "");
  return newValue;
}

/**
 * @param value - string
 * @param format
 *  para ser usado em input 'YYYY-MM-DD' | visualizar em label = 'DD/MM/YYYY'
 **/

export function maskDate(value, format) {
  if (!(value === null) && !(value === undefined)) {
    return moment(value).format(format);
  } else {
    return "";
  }
}
