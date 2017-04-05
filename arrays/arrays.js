function isArrayWithArray(a) {
  return Array.isArray(a);
}

function isArrayWithInstanceOf(a) {
  return a instanceof Array;
}

function range() {
  var arr = [];
  var i = 0;
  if (arguments.length == 1) {
    for (i = 0; i < arguments[0]; i++) {
      arr.push(i);
    }
  } else {
    if (arguments.length == 2) {
      if (arguments[0] <= arguments[1]) {
        for (i = arguments[0]; i < arguments[1]; i++) {
          arr.push(i);
        }
      } else {
        for (i = arguments[0]; i > arguments[1]; i--) {
          arr.push(i);
        }
      }
    } else {
      if (arguments.length == 3) {
        if (arguments[0] <= arguments[1] && arguments[2] > 0) {
          for (i = arguments[0]; i < arguments[1]; i += arguments[2]) {
            arr.push(i);
          }
        } else {
          if (arguments[0] > arguments[1] && arguments[2] < 0) {
            for (i = arguments[0]; i > arguments[1]; i += arguments[2]) {
              arr.push(i);
            }
          } else {
            if (arguments[0] == arguments[1] && arguments[2] == 0) {
              arr.push(arguments[0]);
            }
          }
        }
      }
    }
  }
  return arr;
}

function compactWithCycle(a) {
  var arr = [];
  for (var i = 0; i < a.length; i++) {
    arr[i] = true;
  }
  return arr;
}

function compactWithoutCycle(a) {
  var arr = Array.from(a);
  return a.fill(true);
}

function sumWithCycle(a) {
  var i;
  var sum = 0;
  for (i = 0; i < a.length; i++) {
    if (typeof a[i] == "number") {
      sum += a[i];
    }
  }
  return sum;
}

function sumWithReduce(a) {
  var sum = 0;
  if (a instanceof Array) {
    sum = a.reduce(function(b,c) {
      return b + c;
    },0);
  }
  return sum;
}

function unique(a) {
  var arr = [];
  var i = 0;
  if (a instanceof Array) {
    arr = a.slice();
    arr.sort();
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

function last(a) {
  return a[a.length - 1];
}

function excludeLast(a, num) {
  var i = 0;
  if (a instanceof Array) {
    if (typeof arguments[1] == "number") {
      for (i = 0; i < num; i++) {
        a.pop();
      }
    } else {
      a.pop();
    }
  }
  return a;
}

