function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
}

let regFormIsValid = false;
const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneNumberRegEx = /^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/;
const nameRegEx = /^[a-zA-Z]{3,12}$/;
const formSubmit = document.getElementById("form_submit");

const formInputs = {
  firstname: document.getElementById("first_name"),
  lastname: document.getElementById("last_name"),
  email: document.getElementById("email"),
  phone_number: document.getElementById("phone_number"),
};

const placeholders = {
  firstname: document.getElementById("first_name_hint"),
  lastname: document.getElementById("last_name_hint"),
  email: document.getElementById("email_hint"),
  phone_number: document.getElementById("phone_number_hint"),
};
console.log({ formInputs, placeholders });

function resetValidations() {
  for (let placeholder of Array.from(Object.values(placeholders))) {
    placeholder.innerHTML = "";
  }
  console.log({ placeholders });

  for (let formInput of Array.from(Object.values(formInputs))) {
    formInput.classList.remove("invalid");
    formInput.classList.remove("is_valid");
  }
}

const formData = {
  firstname: undefined,
  lastname: undefined,
  email: undefined,
  phone_number: undefined,
};

function handleRegForm(event) {
  event.preventDefault();
  resetValidations();

  console.log("hi");

  formData.firstname = formInputs.firstname.value.trim();
  formData.lastname = formInputs.lastname.value.trim();
  formData.email = formInputs.email.value.trim();
  formData.phone_number = formInputs.phone_number.value.trim();

  const formValidations = {
    firstname: nameRegEx.test(formData.firstname),
    lastname: nameRegEx.test(formData.lastname),
    email: emailRegEx.test(formData.email),
    password: phoneNumberRegEx.test(formData.phone_number),
  };

  if (!formValidations.firstname) {
    placeholders.firstname.innerHTML = "Must be 3-12 characters long";
    formInputs.firstname.classList.add("invalid");
  } else {
    formInputs.firstname.classList.add("is_valid");
  }

  if (!formValidations.lastname) {
    placeholders.lastname.innerHTML = "Must be 3-12 characters long";
    formInputs.lastname.classList.add("invalid");
  } else {
    formInputs.lastname.classList.add("is_valid");
  }

  if (!formValidations.email) {
    placeholders.email.innerHTML = "You have entered invalid email address";
    formInputs.email.classList.add("invalid");
  } else {
    formInputs.email.classList.add("is_valid");
  }

  if (!formValidations.phoneNumberRegEx) {
    placeholders.phone_number.innerHTML = "Enter valid mobile numbers";
    formInputs.phone_number.classList.add("invalid");
  } else {
    formInputs.phone_number.classList.add("is_valid");
  }

  regFormIsValid =
    formValidations.firstname &&
    formValidations.lastname &&
    formValidations.email &&
    formValidations.phone_number;

  if (regFormIsValid) {
    handleRegFormSubmit(formData);
  }
}
function handleRegFormSubmit(formData) {}

formSubmit.addEventListener("submit", (event) => handleRegForm(event));
