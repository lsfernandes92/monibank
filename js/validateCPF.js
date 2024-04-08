export function isAValidCPF(documentNumber) {
  const sanitizedCPF = documentNumber.replace(/\.|\-/g, "");

  if (nonRepeatedNumbers(sanitizedCPF) && validLastTwoDigits(sanitizedCPF)) {
    console.log("This CPF document number is correct.");
  } else {
    console.log("This CPF document number doesn't exist.");
  }
}

function nonRepeatedNumbers(documentNumber) {
  const repeatedNumbers = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ]

  return !(repeatedNumbers.includes(documentNumber));
}

function validLastTwoDigits(documentNumber) {
  return (validateFirstDigit(documentNumber) && validateLastDigit(documentNumber));
}

function validateFirstDigit(documentNumber) {
  let sum = 0;
  let multiplier = 10;

  for (let size = 0; size < 9; size++) {
      sum += documentNumber[size] * multiplier;
      multiplier--
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
      sum = 0;
  }

  return sum == documentNumber[9];
}

function validateLastDigit(documentNumber) {
  let sum = 0;
  let multiplier = 11;

  for (let size = 0; size < 10; size++) {
      sum += documentNumber[size] * multiplier;
      multiplier--
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
      sum = 0;
  }

  return sum == documentNumber[10];
}