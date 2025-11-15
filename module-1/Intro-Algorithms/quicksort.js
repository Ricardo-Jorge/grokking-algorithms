let arr = [5, 3, 6, 2, 10];
let sortedArr = [];

function findSmallest(arr) {
  let smallestNum = arr[0];
  for (const num of arr) {
    if (num < smallestNum) {
      smallestNum = num;
    }
  }
  return smallestNum;
}

function orderedSort(arr) {
  let indexOfSmallest;
  while (arr.length > 0) {
    let smallestNum = findSmallest(arr);
    sortedArr.push(smallestNum);
    indexOfSmallest = arr.indexOf(findSmallest(arr));
    arr.splice(indexOfSmallest, 1);
  }
  return sortedArr;
}

console.log(orderedSort(arr));
