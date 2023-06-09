// 1. Vòng lặp while

// B1: Khởi tạo biến điều kiện
let i = 1;
// B2: Khai báo while và biểu thức điều kiện
while (i <= 5) {
  // B3: Thực hiện các đoạn mã
  console.log("Xin chào, Cybersoft");

  // B4: Thay đổi giá trị của biến điều kiện
  i++;
}

// Bài tập 1: Nhập vào n dương, chẵn. Chia n cho 2 và lặp lại cho đến khi n <= 1
document.getElementById("btn-1").onclick = () => {
  let n = +document.getElementById("input-1").value;
  let outputEl = document.getElementById("output-1");
  let count = 1;

  outputEl.innerHTML = "";

  while (n > 1) {
    n = Math.floor(n / 2);

    outputEl.innerHTML += `<p>count: ${count} - num: ${n}</p>`;

    count++;
  }

  outputEl.classList.remove("d-none");
};

// 2. Vòng lặp do...while
// Điểm khác biệt so với vòng lặp while là do...while sẽ thực hiện các đoạn mã 1 lần trước khi kiểm tra điều kiện

let j = 1;
do {
  console.log("Xin chào, BC52");
  j++;
} while (j <= 5);

// Bài tập 2:
document.getElementById("btn-2").onclick = () => {
  let n = +document.getElementById("input-2").value;
  let i = 1;
  let total = 0;

  do {
    total += i;
    i++;
  } while (i <= n);

  let outputEl = document.getElementById("output-2");
  outputEl.innerHTML = total;
  outputEl.classList.remove("d-none");
};



