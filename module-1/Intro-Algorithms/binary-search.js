let arr = [1, 3, 5, 7, 9];
let result = 9;
let numberOfTries = 0;

function binarySearch(myArr, result) {
  let low = 0; // First index of the Array
  let high = myArr.length - 1; // Last index of the Array (Round to the floor if rest of the division is different than 0)

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let guess = arr[middle];
    if (guess === result) {
      numberOfTries += 1;
      return result;
    }
    if (guess > result) {
      numberOfTries += 1;
      high = middle - 1;
    } else {
      numberOfTries += 1;
      low = middle + 1;
    }
  }
}

console.log(binarySearch(arr, result));
console.log("Number of tries:", numberOfTries);
