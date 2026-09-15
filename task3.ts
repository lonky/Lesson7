// Напишите функцию, которая найдет максимальное и минимальное число в массиве

const array: number[] = [5, 2, -4, -8, 23, 55, 34, 0, 8];

function miniMax(arr: number[]) {
  let min: number = 0;
  let max: number = 0;
  for (const i of arr) {
    if (min > i) {
      min = i;
    }
    if (max < i) {
      max = i;
    }
  }
  return `min: ${min}, max: ${max}`;
}

console.log(miniMax(array));
