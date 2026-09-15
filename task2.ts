// Написать функцию, которая проверяет является ли слово палиндромом

const word1 = "Анна";
const word2 = "Кабак";
const word3 = "Кот";

function isPolyndr(str: string) {
  const strReversed = str.toLowerCase().split("").reverse().join("");
  return str.toLowerCase() === strReversed;
}

console.log(isPolyndr(word1));
console.log(isPolyndr(word2));
console.log(isPolyndr(word3));
