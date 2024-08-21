import { getListObject, addElementToList } from "./3-list";

const list = getListObject([1, 2, 3, 4]);
console.log(list);
const newList = addElementToList(list, 5);
console.log(newList);