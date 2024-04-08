import { isAValidCPF } from "./validateCPF.js";
import { isAbove18Years } from "./validateAge.js";

const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
  field.addEventListener("blur", () => validateCPF(field));
});

function validateCPF(field) {
  if (field.name == "cpf" && field.value.length >= 11) {
    isAValidCPF(field.value);
  }

  if (field.name == "aniversario" && field.value != "") {
    isAbove18Years(field.value);
  }
}