function div(a, b) {
  return ((a + b)-(a + b)%2)/2;
}

function binarySearch(array, a) {
  var mid_prev = -1;
  var left = 0;
  var right = array.length;
  var mid = div(left, right);
  while (true) {
    if (array[mid] === a) {
      return mid;
    }
    if (array[mid] < a) {
      left = mid;
    } else {
      right = mid;
    }
    mid_prev = mid;
    mid = div(left, right);
    if (mid === mid_prev) {
      return -1;
    }
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
