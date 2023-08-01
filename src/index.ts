import "./sass/style.scss";
import LinkedList from "./LinkedList";

const list = new LinkedList();
// get dom elements
const listDisplay = document.getElementById(
  "list-display"
) as HTMLHeadingElement;
const appendForm = document.getElementById("append-form") as HTMLFormElement;
const prependForm = document.getElementById("prepend-form") as HTMLFormElement;
const sizeForm = document.getElementById("size-form") as HTMLFormElement;
const sizeDisplay = document.getElementById(
  "size-display"
) as HTMLParagraphElement;
const headForm = document.getElementById("head-form") as HTMLFormElement;
const headDisplay = document.getElementById(
  "head-display"
) as HTMLParagraphElement;
const tailForm = document.getElementById("tail-form") as HTMLFormElement;
const tailDisplay = document.getElementById(
  "tail-display"
) as HTMLParagraphElement;
const atForm = document.getElementById("at-form") as HTMLFormElement;
const atDisplay = document.getElementById("at-display") as HTMLParagraphElement;
const popForm = document.getElementById("pop-form") as HTMLFormElement;
const containsForm = document.getElementById(
  "contains-form"
) as HTMLFormElement;
const containsDisplay = document.getElementById(
  "contains-display"
) as HTMLParagraphElement;
const findForm = document.getElementById("find-form") as HTMLFormElement;
const findDisplay = document.getElementById(
  "find-display"
) as HTMLParagraphElement;
const insertForm = document.getElementById("insert-form") as HTMLFormElement;
const removeForm = document.getElementById("remove-form") as HTMLFormElement;

// apply form event listeners
appendForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  list.append(appendForm["append"].value);
  appendForm["append"].value = "";
  listDisplay!.innerText = list.toString();
});

prependForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  list.prepend(prependForm["prepend"].value);
  prependForm["prepend"].value = "";
  listDisplay!.innerText = list.toString();
});

sizeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  sizeDisplay!.textContent = list.size().toString();
});

headForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  headDisplay.textContent =
    list.head() !== null ? list.head()?.toString() : "null";
});

tailForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  tailDisplay.textContent =
    list.tail() !== null ? list.tail()?.toString() : "null";
});

atForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const index = parseInt(atForm["at"].value);
  atDisplay.textContent = !!list.at(index)
    ? list.at(index)?.toString()
    : "null";
  atForm["at"].value = "";
});

popForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  list.pop();
  listDisplay.innerText = list.toString();
});

containsForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const { value } = containsForm["contains"];
  containsDisplay.textContent = list.contains(value).toString();
  containsForm["contains"].value = "";
});

findForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const { value } = findForm["find"];
  findDisplay.textContent =
    list.find(value) !== null ? list.find(value)?.toString() : "null";
});

insertForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const { value } = insertForm["insert"];
  const at = parseInt(insertForm["insert-at"].value);
  list.insertAt(value, at);
  listDisplay.innerText = list.toString();
  insertForm["insert"].value = "";
  insertForm["insert-at"].value = "";
});

removeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const { value } = removeForm["remove"];
  list.removeAt(parseInt(value));
  listDisplay.textContent = list.toString();
  removeForm["remove"].value = "";
});
