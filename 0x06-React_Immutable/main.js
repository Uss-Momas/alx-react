import getImmutableObject from "./0-fromjs";
const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}
const value = getImmutableObject(obj);
console.log(value);