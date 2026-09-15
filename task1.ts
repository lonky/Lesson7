// Написать функцию, которая будет удалять дубликаты из массива, при этом исходный массив не меняется

// Использовать наиболее быстрое решение

const array: number[] = [1, 5, 7, 8, 5, 8, 3];

function deleteDuplicates(arr: number[]) {
  const duplicateArr: number[] = [];
  for (const i of arr) {
    if (!duplicateArr.includes(i)) {
      duplicateArr.push(i);
    }
  }
  return duplicateArr;
}

console.log(deleteDuplicates(array));
