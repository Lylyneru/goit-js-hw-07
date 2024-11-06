const divContainer = document.createElement("div");
divContainer.classList.add("form-container");

const form = document.querySelector(".login-form");
form.classList.add("form-class");

divContainer.appendChild(form);
document.body.appendChild(divContainer);

const labels = form.querySelectorAll("label");
labels.forEach((label) => {
  label.classList.add("form-label");

  label.style.display = "block";
  label.style.marginBottom = "8px";
  label.style.font = "Montserrat";
  label.style.weight = "400";
  label.style.size = "16px";
  label.style.lineHeight = "24px";
});

const inputs = form.querySelectorAll("input");
inputs.forEach((input) => {
  input.classList.add("form-input");

  input.style.width = "360px";
  input.style.height = "40px";
  input.style.marginBottom = "8px";
});

const button = form.querySelector("button");
button.classList.add("form-button");

button.style.padding = "8px 16px";
button.style.backgroundColor = "#4E75FF";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.cursor = "pointer";
button.style.width = "86px";
button.style.height = "40px";

divContainer.style.maxWidth = "408px";
divContainer.style.height = "256px";
divContainer.style.gap = "16px";
divContainer.style.margin = "0 auto";
divContainer.style.padding = "24px";
divContainer.style.border = "1px solid #ccc";
divContainer.style.borderRadius = "8px";
divContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === "" || password === "") {
      alert("All form fields must be filled in");
      return;
    }

    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    form.reset();
  });
