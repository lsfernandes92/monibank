export function isAbove18Years(date) {
  const birthdate = new Date(date);

  validateDate(birthdate);
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