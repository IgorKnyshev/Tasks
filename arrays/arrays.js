function isArrayWithToString(a) {
  return Object.prototype.toString.call(a) === '[object Array]';
}

function isArrayWithInstanceOf(a) {
  return a instanceof Array;
}

function range(a, b, c) {
  var arr = [];
  var len = 0;
  var step = 0;
  var start = 0;
  var i = 0;
  if (!isNaN(c)) {
    step = c;
  } else {
    step = 1;
  }
  if (!isNaN(b) && b !== null) {
    start = a;
    len = b - a;
  } else {
    start = 0;
    len = a;
  }
  if (len > 0 && step > 0) {
    for (i = start; i < start + len; i += step) {
      arr.push(i);
    }
  } else {
    if (len < 0 && step < 0) {
      for (i = start; i > start + len; i += step) {
        arr.push(i);
      }
    }
  }
  return arr;
}

function compactWithCycle(a) {
  var arr = [];
  for (var i = 0; i < a.length; i++) {
    if (!!(a[i]) === true) {
      arr.push(a[i]);
    }
  }
  return arr;
}

function compactWithFilter(a) {
  var arr = [];
  arr = a.filter(function(b) {
    if (!!(b) === true) {
      return b;
    }
  });
  return arr;
}

function sumWithCycle(a) {
  var i = 0;
  var sum = 0;
  for (i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

function sumWithReduce(a) {
  var sum = 0;
  sum = a.reduce(function(b,c) {
    return b + c;
  },0);
  return sum;
}

function unique(a) {
  var arr = [];
  a.filter(function(b) {
    if (arr.indexOf(b) === -1) {
      arr.push(b);
    }
  });
  return arr;
}

function last(a) {
  return a[a.length - 1];
}

function excludeLast(a, num) {
  var arr = [];
  if (!isNaN(num)) {
    arr = a.slice(0, a.length - num);
  } else {
    arr = a.slice(0, a.length - 1)
  }
  return arr;
}

console.log(range(10));
console.log(range(1, 10));
console.log(range(1, 10, 3));
console.log(range(10, null, 3));
console.log(range(10, null));
console.log(range(-2, -5));
console.log(range(-5, -2));
console.log(range(-5, -2, 2));
console.log(range(-5, -2, -2));
console.log(range(-5, null, 2));
console.log(range(-5, null, -2));
console.log(range(-10, -20, -5));
console.log(range(-20, -10, -5));
console.log(range(10, 20, 5, 5, 5));
