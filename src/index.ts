import LinkedList from "./LinkedList";
import "./sass/style.scss";

const list = new LinkedList();

list.append("two");

list.append("three");

list.prepend("one");

list.prepend("zero");

console.log(list.head());

console.log(list.toString());

console.log(list.size());

console.log(list.tail());

console.log(list.at(3));

list.pop();

console.log(list.toString());
