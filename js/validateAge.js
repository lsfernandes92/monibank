export function isAbove18Years(field) {
  const birthdate = new Date(field.value);

  if (!validateDate(birthdate)) {
    field.setCustomValidity("User is not above 18 years.")
  }
}

function validateDate(date) {
  const currentDate = new Date();
  const birthDatePlus18 = new Date(
    date.getUTCFullYear() + 18,
    date.getUTCMonth(),
    date.getUTCDate()
  );

  return currentDate >= birthDatePlus18;
}