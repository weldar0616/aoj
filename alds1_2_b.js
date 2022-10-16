function main(input) {
  const inputArray = input.split("\n");
  const n = inputArray[0];
  const arr = inputArray[1].split(" ").map(Number);

  selectionSort(arr, n);
}

function swap(arr, i, j) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function selectionSort(arr, n) {
  let sw = 0;
  for (let i = 0; i < n; i++) {
    let minj = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minj]) {
        minj = j;
      }
    }
    if (i !== minj) {
      swap(arr, i, minj);
      sw++
    }
  }
  console.log(arr.join(" "))
  console.log(sw)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
