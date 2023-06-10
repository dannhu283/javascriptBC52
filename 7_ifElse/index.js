//--if
// ví dụ: chuyển số âm sang dương
let n = 0;
let a = -5;
if (a < 0) {
  n++;
}
console.log("n=", n);
// ví dụ tính tiền phạt thẻ tín dụng
function ex1() {
  let moneyMustPay = +document.getElementById("ip-1").value;
  let moneyPay = +document.getElementById("ip-2").value;
  let pay = 0;
  let interestRate = 0.015;
  let total = moneyMustPay - moneyPay;
  if (total > 0) {
    pay = total * 0.015;
  }
  document.getElementById("money").innerHTML = pay.toLocaleString("en-US", {
    style: "currency",
    currency: "VND",
  });
}

// if-else
let b = 5;
let c = 9;
//tìm số lớn hơn trong 2 số
if (b > c) {
  console.log("b lớn nhất:");
} else {
  console.log("c lớn nhất:");
}

//bài tập tính số tiền lương cho nhân viên
function ex2() {
  let hour = +document.getElementById("ip-3").value;
  let salary = +document.getElementById("ip-4").value;
  let overMoney = 1.5;
  let total = 0;
  if (hour - 40 > 0) {
    total = salary * 40 + (hour - 40) * overMoney * salary;
    document.getElementById("hi").innerHTML = total.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
  } else {
    total = hour * salary;
    document.getElementById("hi").innerHTML = total.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
  }
}

//if - else if -else
let d = 9;
let f = 9;
if (d > f) {
  console.log("d lớn nhất");
} else if (f > d) {
  console.log("f lớn nhất");
} else {
  console.log("d bằng f");
}

//tính tiền mua hàng

function ex3() {
  let quantity = +document.getElementById("ip-5").value;
  let price = +document.getElementById("ip-6").value;
  let total = 0;
  if (quantity < 50) {
    total = quantity * price;
    document.getElementById("he").innerHTML = total.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
  } else if (quantity <= 100) {
    total = 49 * price + (quantity - 49) * price * 0.92;
    document.getElementById("he").innerHTML = total.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
  } else {
    total = 49 * price + 51 * price + (quantity - 100) * price * 0.89;
    document.getElementById("he").innerHTML = total.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
  }
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
