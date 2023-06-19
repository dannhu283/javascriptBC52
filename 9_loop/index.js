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
// 3. vòng lặp for
for (let i = 1; i <= 5; i++) {
  console.log("hello DN");
}

// bài tập 3: in tất cả số nguyên dương lẻ nhỏ hơn 100
function ex3() {
  let output = "";
  for (let j = 1; j <= 100; j++) {
    if (j % 2 !== 0) {
      output += j + ",";
    }
  }
  // output=" 1,3,5,....99"
  console.log("ex3:", output);
}
ex3();
//4.vòng lặp lồng nhau
let count = 0;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    count++;
  }
}
console.log(" số lần chạy:", count);

//bài tập in ra hình vuông dâu * có kích thước 5*5
function ex4() {
  let output = "";
  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
      output += "* ";
    }
    output += "\n";
  }
  console.log(output);
}
ex4();

// dùng vòng lặp để duyệt qua tưng kí tự trong chuỗi
let message = "Hello Cybersoft";
// cách truy cập vào 1 kí tự bất kì trong chuối dựa vào chỉ mục
console.log(message[0]); //H
console.log(message[1]); //e
// lấy ra độ dài của chuỗi
console.log(message.length);
for (let i = 0; i < message.length; i++) {
  console.log(message[i]);
}

// lệnh break(thoát khỏi vòng lặp)
// bài tập 5: cộng giá trị từ 1 đến n bất kì cho đến khi tổng các số đó vượt quá 100 thì dừng lại
function ex5() {
  let i = 1;
  let sum = 0;
  while (true) {
    sum += i;
    if (sum > 100) {
      break;
    }
    i++;
  }
  console.log(sum, i);
}
ex5();
// lệnh continue
function ex6() {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    if (i === 4) {
      continue;
    }
    total += i;
  }
  console.log(total);
}
ex6();

// lệnh return( thoát khỏi cả vòng lặp và hàm)
function ex7() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      return i;
    }
    console.log(i);
  }
  console.log("run run run");
}
ex7();

//bài tập viết hàm kiểm tra 1 số có phải là số nguyên tố hay không
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("isPrime(5)", isPrime(5));
console.log("isPrime(10)", isPrime(10));
isPrime(5); // true    vì 5 là sô nguyên tố
isPrime(10); //false    10 không phải là SNT
//cách tối ưu hơn
// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   if (n === 2) {
//     return true;
//   }
//   if (n % 2 === 0) {
//     return false;
//   }
//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
