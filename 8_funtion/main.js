function showMessage() {
  console.log("hello World!!!");
}
showMessage();

// hàm có tham số
function greeting(name) {
  console.log(`hello ${name}`);
}
greeting("alice");
greeting("Nhu");
greeting("hien");

// hàm có giá trị trả về thì đi kèm với return
function Sum(a, b) {
  return a + b;
}
//gọi hàm và tạo biến để hứng giá trị
let sum1 = Sum(5, 8);
console.log("sum1 :", sum1);

// tầm vực hoạt động của biến

// *local variable(biến cụ bộ):những biến được khai báo bên trong hàm chỉ có thể được truy cập bên trong hàm đó
// *biến bên ngoài hàm
//ví dụ tạo biến msg trong hàm showMsg rồi ra bên ngoài log giá trị msg thì không được,báo lỗi not defined
let username = "nhuttd";
function showMsg() {
  username = "nhu.tran";
  let msg = `Hello ${username}`;
  console.log(msg);
}
showMsg();
// console.log(" biến Msg:", msg);  // lỗi

//các cách khác để định nghĩa hàm

//function expression
const doSomething = function () {
  console.log("function expression");
}; //(cách định nghĩa hàm này thì phải định nghĩa rồi mới gọi hàm được)
doSomething();
// 1 cách khác để khai báo sự kiện onclick của button
let btnEl1 = document.getElementById("btn-1");
btnEl1.onclick = function () {
  alert("tran thi dan nhu");
};

//arrow funtion (định nghĩa ngắn gọn hơn)
const doSomething1 = () => {
  console.log("arrow function");
};
doSomething1();

// viết hàm nhận vào 1 số và trả về kết quả bình phương của số đó
// const square = (a) => {
//   return Math.pow(a, 2);
// }; cho phép bỏ qua cặp ngoặc nhọn ra ngoài từ khóa return khi trả về giá trị trong trường hợp hảm chỉ có 1 dòng duy nhát
const square = (a) => Math.pow(a, 2);
let x = square(3);
console.log("x:", x);
let y = square(7);
console.log("y:", y);

let btn2El = document.getElementById("btn-2");
btn2El.onclick = () => {
  alert("btn 2 clicked");
};

//Callback function (mục đích sử dụng để tái sử dụng dễ dàng hơn)
function doSomthing2(callback) {
  console.log(" ví dụ callback function");

  callback();
}
function displayMessage() {
  console.log("hello JS");
}
function displayName() {
  console.log("Hello john");
}

// hàm displayMessage là đối số của hàm doSomething2 =>hàm displayMessage được gọi là callback function
doSomthing2(displayMessage);
//ta có thể gọi hàm doSoSomthing2 kèm theo bất kì hàm callback nào khác
doSomthing2(displayName);

// xây dựng chương trình như sau : Hiển thị ra 1 câu hỏi và 2 tùy chọn yes/no. Dựa vào lựa chọn của người dùng mà ta sẽ lựa chọn các hành động khác nhau

function askInformation(question, yesCallback, noCallback) {
  let isAllowed = confirm(question);

  if (isAllowed) {
    yesCallback();
  } else {
    noCallback();
  }
}

function yes() {
  alert(" bạn đã đồng ý");
}
function no() {
  alert(" bạn không đồng ý");
}

function yes1() {
  alert(" bạn đã đồng ý cho phép truy cập thông tin");
}
function no1() {
  alert(" bạn không đồng ý cho phép truy cập thông tin");
}
// askInformation("bạn có cho phép truy cập thông tin của mình", yes1, no1);
// askInformation(" Do you love me ?", yes, no);
// askInformation(
//   "cho phép truy cập camera",
//   function () {
//     alert("ok");
//   },
//   function () {
//     alert("không đời nào");
//   }
// );

askInformation(
  "cho phép truy cập webcam ",
  () => {
    alert("bạn cho phép truy cập");
  },
  () => {
    alert("bạn không cho phép truy cập");
  }
);
// cas 1 live code
// function test() {
//   var revString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     revString += str[i];
//   }
//   return revString;
// }
