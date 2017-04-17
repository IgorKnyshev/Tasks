function binarySearch(array, a) {
  var mid_prev = -1;
  var left = 0;
  var right = array.length;
  var mid = Math.floor((left + right) / 2);
  while (mid !== mid_prev) {
    if (array[mid] === a) {
      return mid;
    }
    if (array[mid] < a) {
      left = mid;
    } else {
      right = mid;
    }
    mid_prev = mid;
    mid = Math.floor((left + right) / 2);
  }
}

console.log(binarySearch([1,5,9,12,15], 15));
console.log(binarySearch([1,5,9,12,15], 1));
console.log(binarySearch([1,5,9,12,15], 9));
console.log(binarySearch([1,5,9,12,15], 5));
console.log(binarySearch([1,5,9,12,15], 12));
console.log(binarySearch([1,5,9,12,15], 0));
console.log(binarySearch([1,5,9,12,15], 16));
console.log(binarySearch([-8,-7,-6,-2,-1], -1));
console.log(binarySearch([1,2], 1));
console.log(binarySearch([1,2], 2));
console.log(binarySearch([1], 1));
console.log(binarySearch([1], 0));
