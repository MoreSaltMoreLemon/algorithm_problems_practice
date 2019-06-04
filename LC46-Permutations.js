import * as R from "ramda";

var permute = function(nums, i = 0) {};

// [a, b, c, d]
//   [a, d, c, b]
//     [a, d, b, c]
//   [a, c, b, d]
//     [a, c, d, b]
//   [a, b, c, d]
//     [a, b, d, c]

function sequences(arr) {
  const variations = [arr.slice()];

  for (let i = 1; i < arr.length; i++) {
    const ai = arr.slice()
    for (let j = arr.length - 1; j > i; j--) {
      

    }
  }
}

function flip(arr, start, end) {
  const copy = flipCopy(arr, start, end);
}

function flipCopy(arr, start, end) {
  const copy = arr.slice();
  [copy[start], copy[end]] = [copy[end], copy[start]];
  return copy;
}

function rotations(arr) {
  return arr.reduce((acc, _, i, arr) => {
    acc.push(rotate(arr, i));
	return acc;
  }, []);
}

function rotate(arr, degree) {
  return [...arr.slice(degree, arr.length), ...arr.slice(0, degree)];
}
