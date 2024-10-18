let nav = document.getElementById("navbar");
let container = document.createElement("div");
let list = document.createElement("ul");
list.classList.add("display-flex");
list.style.listStyle = "none";
list.style.backgroundColor = "red";
list.style.height = "50px";
list.style.paddingLeft = "0";
let item1 = document.createElement("li");
let item2 = document.createElement("li");
let item3 = document.createElement("li");
let item4 = document.createElement("li");
item1.textContent = "Home";
item2.textContent = "About";
item3.textContent = "Contact";
item4.textContent = "Other";
nav.appendChild(container);
container.appendChild(list);
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);

let main = document.querySelector(".main");
main.style.backgroundColor = "green";
main.style.height = "100vh";
let registrationForm = document.createElement("form");
registrationForm.classList.add("main-display");
registrationForm.style.height = "200px";
let loginForm = document.createElement("form");
main.appendChild(registrationForm);

let labelsAndInputs = [
  {
    text: "Name",
    for: "name",
    type: "text",
    placeholder: "Name",
    name: "name",
    id: "name",
  },
  {
    text: "Email",
    for: "email",
    type: "email",
    placeholder: "Email",
    name: "email",
    id: "email",
  },
  {
    text: "Password",
    for: "password",
    type: "password",
    placeholder: "Password",
    name: "password",
    id: "psw",
  },
  {
    text: "Confirm password",
    for: "cfn-password",
    type: "password",
    placeholder: "Confirm Password",
    name: "cfn-password",
    id: "cfn-psw",
  },
];

labelsAndInputs.forEach((label) => {
  let label2 = document.createElement("label");
  label2.setAttribute("for", label.for);
  label2.textContent = label.text;
  let input2 = document.createElement("input");
  input2.setAttribute("type", label.type);
  input2.setAttribute("placeholder", label.placeholder);
  input2.setAttribute("name", label.name);
  input2.setAttribute("id", label.id);

  registrationForm.appendChild(label2);
  registrationForm.appendChild(input2);
});
