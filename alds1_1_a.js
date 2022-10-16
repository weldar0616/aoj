function main(input) {
  const inputArray = input.split("\n");
  const n = inputArray[0];
  const arr = inputArray[1].split(" ").map(Number);

  insertionSort(arr, n);
}

function insertionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    const v = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > v) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = v;
    console.log(arr.join(" "));
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
