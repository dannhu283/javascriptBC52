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

// Toán tử bậc 3
// let result = (biểu thức điều kiện) ? valueA : valueB

let age = 18;

// let allowed;
// if(age >= 18) {
//   allowed = true
// } else {
//   allowed = false
// }

// Chỉ xài thay thế if-else khi muốn gán giá trị cho 1 biến dựa vào điều kiện
let allowed = age >= 18 ? true : false;

// switch case
/*
  switch(12) {
    case valueA: {         - Tương tự if(x === valueA)
      ...
      break;
    }
    case valueB: {         - if(x === valueB)
      ...
      break;
    }
    ...
  }
*/

// Tính số ngày trong tháng
function ex4() {
  let month = +document.getElementById("input-month").value;

  // if (
  //   month === 1 ||
  //   month === 3 ||
  //   month === 5 ||
  //   month === 7 ||
  //   month === 8 ||
  //   month === 10 ||
  //   month === 12
  // ) {
  //   alert("Tháng có 31 ngày");
  // }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("Tháng có 31 ngày");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("Tháng có 30 ngày");
      break;
    case 2:
      alert("Tháng có 28 ngày");
      break;
    default:
      alert("Tháng không hợp lệ");
      break;
  }
}
