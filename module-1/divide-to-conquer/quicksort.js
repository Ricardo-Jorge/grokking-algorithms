function quicksort(array) {
  // Base case, arrays with 0 or 1 element are already "sorted"
  if (array.length < 2) return array;

  //recursive case
  let pivot = array[0];

  // SubArray of all elements less than the pivot
  let less = array.slice(1).filter((el) => el < pivot);

  // SubArray of all elements greater than pivot
  let greater = array.slice(1).filter((el) => el > pivot);

  return quicksort(less).concat(pivot, quicksort(greater));
}

console.log(quicksort([10, 5, 2, 3, 4]));
