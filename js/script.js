import { isAValidCPF } from "./validateCPF.js";
import { isAbove18Years } from "./validateAge.js";

const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
  field.addEventListener("invalid", event => event.preventDefault());
});

function validateField(field) {
  let message = "";
  field.setCustomValidity("");

  if (field.name == "cpf" && field.value.length >= 11) {
    isAValidCPF(field);
  }

  if (field.name == "aniversario" && field.value != "") {
    isAbove18Years(field);
  }

  errorTypes.forEach(error => {
    if (field.validity[error]) {
      message = messages[field.name][error];
    }
  });

  const spanErrorMessage = field.parentNode.querySelector(".mensagem-erro");
  const validInput = field.checkValidity();

  if (!validInput) {
    spanErrorMessage.textContent = message;
  } else {
    spanErrorMessage.textContent = "";
  }
}

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError"
];

const messages = {
  nome: {
      valueMissing: "O campo de nome não pode estar vazio.",
      patternMismatch: "Por favor, preencha um nome válido.",
      tooShort: "Por favor, preencha um nome válido."
  },
  email: {
      valueMissing: "O campo de e-mail não pode estar vazio.",
      typeMismatch: "Por favor, preencha um email válido.",
      tooShort: "Por favor, preencha um e-mail válido."
  },
  rg: {
      valueMissing: "O campo de RG não pode estar vazio.",
      patternMismatch: "Por favor, preencha um RG válido.",
      tooShort: "O campo de RG não tem caractéres suficientes."
  },
  cpf: {
      valueMissing: 'O campo de CPF não pode estar vazio.',
      patternMismatch: "Por favor, preencha um CPF válido.",
      customError: "O CPF digitado não existe.",
      tooShort: "O campo de CPF não tem caractéres suficientes."
  },
  aniversario: {
      valueMissing: 'O campo de data de nascimento não pode estar vazio.',
      customError: 'Você deve ser maior que 18 anos para se cadastrar.'
  },
  termos: {
      valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
  }
}