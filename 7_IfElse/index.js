// - If

// Ví dụ: chuyển số âm sang dương
let a = -5;
if (a < 0) {
  a = -a;
  console.log("Giá trị a:", a);
}

// Ví dụ: tính tiền phạt thẻ tín dụng
function ex1() {
  let credit = +document.getElementById("input-credit").value;
  let payment = +document.getElementById("input-payment").value;

  let pentalty = 0;
  let balance = credit - payment;

  if (balance > 0) {
    pentalty = (balance * 1.5) / 100;
  }

  alert(`Tiền phạt: ${pentalty}`);
}

// If - Else
let b = 5;
let c = 9;

// Ví dụ: tìm số lớn hơn trong 2 số
if (b > c) {
  console.log("b lớn nhất");
} else {
  console.log("c lớn nhất");
}

function ex2() {
  let hours = +document.getElementById("input-hours").value;
  let salary = +document.getElementById("input-salary").value;

  let totalSalary = 0;

  if (hours > 40) {
    let rate = 1.5;
    let overHours = hours - 40;
    let baseSalary = 40 * salary;
    let overtimeSalary = overHours * salary * rate;

    totalSalary = baseSalary + overtimeSalary;
  } else {
    totalSalary = hours * salary;
  }

  alert(`Tổng lương: ${totalSalary}`);
}

// If - Else If - Else
let d = 9;
let f = 9;

if (d > f) {
  console.log("d lớn nhất");
} else if (f > d) {
  console.log("f lớn nhất");
} else {
  console.log("d bằng f");
}

function ex3() {
  let quantity = +document.getElementById("input-quantity").value;
  let price = +document.getElementById("input-price").value;

  let totalPrice = 0;

  if (quantity < 50) {
    totalPrice = price * quantity;
  } else if (quantity <= 100) {
    totalPrice = 49 * price + (quantity - 49) * price * 0.92;
  } else {
    totalPrice =
      49 * price + 51 * price * 0.92 + (quantity - 100) * price * 0.88;
  }

  alert(`Tổng tiền hàng: ${totalPrice}`);
}
