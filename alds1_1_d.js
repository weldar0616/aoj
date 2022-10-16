function main(input) {
  const inputArray = input.split("\n").map(Number);
  const N = inputArray.shift();
  const r = inputArray;

  let minv = r[0];
  let maxv = -Infinity;

  for (let j = 1; j <= N - 1; j++) {
    maxv = Math.max(maxv, r[j] - minv);
    minv = Math.min(minv, r[j]);
  }

  console.log(maxv);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
