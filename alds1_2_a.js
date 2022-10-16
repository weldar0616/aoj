function main(input) {
  const inputArray = input.split("\n");
  const n = inputArray[0];
  const arr = inputArray[1].split(" ").map(Number);

  bubbleSort(arr, n);
}

function bubbleSort(arr, n) {
  let flag = true; // 次の隣接要素が存在する
  let cnt = 0;
  for (let i = 0; flag; i++) {
    flag = false;
    for (let j = n - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        const t = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = t;
        flag = true;
        cnt++;
      }
    }
  }
  console.log(arr.join(" "));
  console.log(cnt);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
