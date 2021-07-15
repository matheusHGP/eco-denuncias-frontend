export function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) return false;
  return true;
}

export function validateCPF(cpf) {
  if (
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  )
    return false;

  var exp = /\.|-/g;
  cpf = cpf.toString().replace(exp, "");
  var digitedDigit = Number(cpf.charAt(9) + cpf.charAt(10));
  var sum1 = 0,
    sum2 = 0;
  var vlr = 11;

  for (let i = 0; i < 9; i++) {
    sum1 += cpf.charAt(i) * (vlr - 1);
    sum2 += cpf.charAt(i) * vlr;
    vlr--;
  }
  sum1 = (sum1 * 10) % 11 === 10 ? 0 : (sum1 * 10) % 11;
  sum2 = ((sum2 + 2 * sum1) * 10) % 11;

  var generatedDigit = sum1 * 10 + sum2;
  if (generatedDigit !== digitedDigit) return false;
  return true;
}
