// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];
const array2 = [1, [2, 3], [4], 5, [6, 7, 8, [9, 10, 11]]];

// const result = [1, 2, 3, 4, 5, 6, 7, 8];

type RecursiveType<T> = (T | RecursiveType<T>)[];

function flattenArr<T>(arr: RecursiveType<T>) {
  const flatArr: T[] = [];
  for (const i of arr) {
    if (Array.isArray(i)) {
      flatArr.push(...flattenArr(i));
    } else {
      flatArr.push(i);
    }
  }
  return flatArr;
}

console.log(flattenArr(array));
console.log(flattenArr(array2));
