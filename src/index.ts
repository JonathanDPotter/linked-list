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
  const appendInput = appendForm["append"] as unknown as HTMLInputElement;
  list.append(appendInput.value);
  listDisplay!.innerText = list.toString();
  appendInput.value = "";
});

prependForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const prependInput = prependForm["prepend"] as unknown as HTMLInputElement;
  list.prepend(prependInput.value);
  listDisplay!.innerText = list.toString();
  prependInput.value = "";
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
  const atInput = atForm["at"] as HTMLInputElement;
  atDisplay.textContent = !!list.at(parseInt(atInput.value))
    ? list.at(parseInt(atInput.value))?.toString()
    : "null";
  atInput.value = "";
});

popForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  list.pop();
  listDisplay.innerText = list.toString();
});

containsForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const containsInput = containsForm["contains"] as unknown as HTMLInputElement;
  containsDisplay.textContent = list.contains(containsInput.value).toString();
  containsInput.value = "";
});

findForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const findInput = findForm["find"] as HTMLInputElement;
  findDisplay.textContent =
    list.find(findInput.value) !== null
      ? (list.find(findInput.value)?.toString() as string)
      : "null";
  findInput.value = "";
});

insertForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const insertInput = insertForm["insert"] as HTMLInputElement;
  const atInput = insertForm["insert-at"] as HTMLInputElement;
  list.insertAt(insertInput.value, parseInt(atInput.value));
  listDisplay.innerText = list.toString();
  insertInput.value = "";
  atInput.value = "";
});

removeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const removeInput = removeForm["remove"] as unknown as HTMLInputElement;
  list.removeAt(parseInt(removeInput.value));
  listDisplay.textContent = list.toString();
  removeInput.value = "";
});

const paragraphs = Array.from(document.getElementsByTagName("p"));


