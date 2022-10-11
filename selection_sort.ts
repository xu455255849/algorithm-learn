function findSmallestIndex(array: number[]): number {
  let smallestIndex = 0;
  let smallestElement = array[smallestIndex]

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i
    }
  }
  return smallestIndex;
}

function selectionSort(array: number[]) {
  const sortedArr = [];

  for (let i = 0; i < array.length; i++) {
    const smallestIndex = findSmallestIndex(array);
    sortedArr.push(array.splice(smallestIndex, 1)[0])
  }

  return sortedArr;
}

console.log(selectionSort([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]
