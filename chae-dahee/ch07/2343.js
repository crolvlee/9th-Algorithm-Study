let input = require("fs").readFileSync("chae-dahee/ch07/2343.txt").toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let right = arr.reduce((a, b) => a + b); //누적값
let left = 0;
let ans = Infinity;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let cnt = 1;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mid) {
      cnt = Infinity;
      break;
    }
    if (sum + arr[i] <= mid) {
      sum += arr[i];
    } else {
      cnt++;
      sum = arr[i];
    }
  }
  if (cnt <= m) {
    right = mid - 1;
    ans = Math.min(ans, mid);
  } else {
    left = mid + 1;
  }
}
console.log(ans);
