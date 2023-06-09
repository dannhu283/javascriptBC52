// Định nghĩa hàm
function showMessage() {
  console.log("Hello World!!!");
}
// Gọi hàm
showMessage();
// Hàm có tính chất tái sử dụng
showMessage();
showMessage();

// Hàm có tham số
function greeting(name) {
  console.log(`Hello ${name}`);
}
// Gọi hàm và truyền vào đối số
greeting("Alice");
greeting("Bob");

// Hàm có giá trị trả về
function sum(a, b) {
  return a + b;
}
// Gọi hàm và nhận kết quả trả về
let sum1 = sum(5, 8);
console.log("sum1:", sum1);
let sum2 = sum(4, 13);
console.log("sum2:", sum2);

// Tầm vực hoạt động của biến
// biến cục bộ (local variable): những biến được khai báo bên trong hàm, chỉ có thể được truy cập bên trong hàm đó
// biến bên ngoài (outer variable): những biến được khai báo bên ngoài hàm, thì hàm có thể truy cập những biến đó
let username = "dannd";
function showMsg() {
  username = "dan.nguyen";
  let msg = `Hello ${username}`;
  console.log(msg);
}
showMsg();
// console.log("Biến msg:", msg); // Lỗi

// Các cách khác để định nghĩa hàm

// function expression
const doSomething = function () {
  console.log("function expression");
};
doSomething();

// Một cách khác để khai báo sự kiện click của button
let btn1El = document.getElementById("btn-1");
btn1El.onclick = function () {
  alert("btn 1 clicked");
};

// arrow function
const doSomething1 = () => {
  console.log("arrow function");
};
doSomething1();

// Viết hàm nhận vào 1 số và trả về kết quả bình phương của số đó
// const square = (a) => {
//   return Math.pow(a, 2)
// }

// Cho phép bỏ qua cặp ngoặc nhọn ra từ khoá return khi trả về giá trị trong trường hợp hàm chỉ có 1 dòng duy nhất
const square = (a) => Math.pow(a, 2);
let x = square(3);
console.log("x:", x);
let y = square(7);
console.log("y:", y);

let btn2El = document.getElementById("btn-2");
btn2El.onclick = () => {
  alert("btn 2 clicked");
};

// Callback function
// tham số callback là 1 hàm
function doSomething2(callback) {
  console.log("Ví dụ callback function");
  callback(); // Gọi tới hàm displayMessage
}

function displayMessage() {
  console.log("Hello JS");
}
function displayName() {
  console.log("Hello John");
}

// Hàm displayMessage là đối số của hàm doSomething2 => Hàm displayMessage được gọi là callback function
doSomething2(displayMessage);
// Ta có thể gọi hàm doSomething2 kèm theo bất kì hàm callback nào khác
doSomething2(displayName);

// Xây dựng chương trình như sau: Hiển thị ra 1 câu hỏi và 2 tuỳ chọn YES/NO. Dựa vào lựa chọn của người dùng mà ta sẽ thực hiện các hành động khác nhau

function askInformation(question, yesCallback, noCallback) {
  let isAllowed = confirm(question);

  if (isAllowed) {
    yesCallback();
  } else {
    noCallback();
  }
}

function yes1() {
  alert("Bạn đã đồng ý cho phép truy cập thông tin");
}
function no1() {
  alert("Bạn không đồng ý cho phép truy cập thông tin");
}

function yes2() {
  alert("Bạn đã đồng ý cho phép truy cập vị trí");
}
function no2() {
  alert("Bạn không đồng ý cho phép truy cập vị trí");
}

// askInformation(
//   "Bạn có cho phép truy cập các thông tin ẩn danh hay không",
//   yes1,
//   no1
// );

// askInformation("Bạn có cho phép truy cập vị trí hay không", yes2, no2);

// askInformation(
//   "Cho phép truy cập webcam",
//   function () {
//     alert("Cho phép truy cập webcam");
//   },
//   function () {
//     alert("Không cho phép truy cập webcam");
//   }
// );

askInformation(
  "Cho phép truy cập camera",
  () => {
    alert("Bạn cho phép truy cập camera");
  },
  () => {
    alert("Bạn không cho phép truy cập camera");
  }
);
