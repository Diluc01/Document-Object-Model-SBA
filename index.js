let nav = document.getElementById("navbar");
let container = document.createElement("div");
let list = document.createElement("ul");
list.classList.add("display-flex");
list.style.listStyle = "none";
list.style.backgroundColor = "#DA2C38";
list.style.height = "50px";
list.style.paddingLeft = "0";
list.style.marginBottom = "0";
let item1 = document.createElement("li");
let item2 = document.createElement("li");
let item3 = document.createElement("li");
let item4 = document.createElement("li");

let item1link = document.createElement("a");
let item2link = document.createElement("a");
let item3link = document.createElement("a");
let item4link = document.createElement("a");

item1link.style.color = "black";
item2link.style.color = "black";
item3link.style.color = "black";
item4link.style.color = "black";

item1link.addEventListener("click", function () {
  item1link.textContent = "Homepage";
  item1link.style.color = "green";
  item1link.href = "#home";
});

item1link.textContent = "Home";
item2link.textContent = "About";
item3link.textContent = "Contact";
item4link.textContent = "Other";

item1link.href = "#";
item2link.href = "#";
item3link.href = "#";
item4link.href = "#";

nav.appendChild(container);

container.appendChild(list);

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);

item1.appendChild(item1link);
item2.appendChild(item2link);
item3.appendChild(item3link);
item4.appendChild(item4link);

let li = document.querySelector("nav ul li").firstChild;
li.style.textDecoration = "none";

const ul = document.querySelector("#fragment");

let clonedItem = li.cloneNode(true);

const fragment = new DocumentFragment();
fragment.appendChild(clonedItem);
ul.append(fragment);

let main = document.querySelector(".main");
main.classList.add("form-display");
main.style.backgroundColor = "#230903";
main.style.height = "100vh";
main.style.padding = "16px";
let registrationForm = document.createElement("form");
registrationForm.classList.add("main-display");
registrationForm.style.height = "200px";
main.prepend(registrationForm);

let submit = document.getElementById("submit");
let log = document.getElementById("log");
submit.addEventListener("submit", logSubmit);

function logSubmit(event) {
  event.preventDefault();
  log.textContent = `Form submitted! Timestamp: ${event.timeStamp}`;
}

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
  label2.style.fontSize = "1.5rem";
  label2.textContent = label.text;
  label2.style.fontFamily = "Calibri";
  let input2 = document.createElement("input");
  input2.style.padding = "10px";
  input2.style.display = "inline-block";
  input2.style.border = "none";
  input2.style.borderRadius = "4px";
  input2.style.backgroundColor = "#f1f1f1";
  input2.style.fontSize = "1.5rem";
  input2.style.marginBottom = "5px";
  input2.setAttribute("type", label.type);
  input2.setAttribute("placeholder", label.placeholder);
  input2.setAttribute("name", label.name);
  input2.setAttribute("id", label.id);

  registrationForm.appendChild(label2);
  registrationForm.appendChild(input2);
});

let button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("class", "registerbtn");
button.textContent = "Sign up";
button.style.padding = "10px";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.fontSize = "24px";
button.style.marginTop = "10px";
registrationForm.appendChild(button);

function myFunction() {
  let person = prompt("Please enter your name", "Berlin Tejeda");
  if (person != null) {
    window.alert("Hello " + person + " How are you today?");
  }
}

const name2 = document.getElementById("exampleInputEmail1");
const password2 = document.getElementById("exampleInputPassword1");
const errorElement = document.getElementById("error");

submit.addEventListener("submit", (event) => {
  let messages = [];
  if (name2.value === "" || name2.value == null) {
    messages.push("Name is required");
  }
  if (messages.length > 0) {
    event.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
