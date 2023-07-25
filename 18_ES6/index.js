//1.khai báo biến
//--Thay var bằng let,const

//var cho phép khai báo lại biến đã được khai báo
var a = 1;
var a = "hello";

//let và const không cho phép khai báo 1 biến đã được khai khai báo
//let chỉ cho phép gán lại giá trị cho biến
//const không được gán lại giá trị cho biên
let b = 1;
b = "CyberSoft";

//--cơ chế hoisting
console.log(c); //undefined
var c = 10;
console.log(c); //10

// console.log(d);  //erro
let d = 5;
console.log(d); // 5

//--scope :tầm vực hoạt động của biến
//-global:các biến toàn cục được khai báo ở ngoài cùng của file
//-function: các biến được khai báo bên trong hàm
//-block: các biến được khai báo bên trong {}

function demoScope() {
  var msg = "hello";
  var time = 4;
  if (time > 3) {
    var msg = "hello Cybersoft";
  }
  console.log(msg);
}
demoScope();

//2.Arrow function

// function delecration
//-hỗ trợ hoisting
//-có con trỏ this
//=> thường dùng để khai báo các hàm toàn cục và dùng trong phương thức của ob
function fn1() {}

//arrow function
//-cú pháp ngắn gọn
//-không có con trỏ this mà sẽ dùng this của hàm cha bao bọc lấy nó
//=> thường dùng để khai báo callback
const fn2 = () => {};

function getUsers() {
  display();
}

function display() {}

//3.default params

const sum = (a = 0, b = 0) => a + b;
sum();
console.log(sum());
console.log(sum(2, 3));
console.log(sum(4));

const calcBill = (price, discount, tax) => {
  const discountPrice = price - price * discount;
  return discountPrice + discountPrice * tax;
};
console.log(calcBill(100000));

//4.rest param

const total3 = (...numbers) => {
  return numbers.reduce((result, number) => {
    return result + number;
  });
};

console.log(total3(1, 2, 3, 4));
console.log(total3(1, 2, 3, 4, 5, 6, 7));

//5.spread operator : copy ra ob mới

const obj1 = { a: 1, b: 2 };

const obj2 = { ...obj1 };

console.log(obj2);

const obj3 = { ...obj1, b: 3, c: 4 };
console.log(obj3);

const arr1 = ["m", "n", "p"];

const arr2 = [...arr1];
console.log(arr2);

//6.destructuring
let fullName = "Hoang nguyen";

//------ đối với mảng (arr)
//theo cách thông thường nếu muốn tách riêng
// const arrName = fullName.split(" "); //["hoang","nguyen"]
// const fisrtName = arrName[0];  // "hoang"
// const LastName = arrName[1];  //"nguyen"
const [fisrtName, lastName] = fullName.split(" ");
console.log(fisrtName);
console.log(lastName);

let admin = "John";
let guest = "Bob";
[admin, guest] = [guest, admin];
console.log(admin, guest);

//------ đối với ob
const user = {
  userName: "trang",
  email: "dannhu2803@gmail.com",
  className: "bc52",
};
//theo cách thông thường nếu muốn tách riêng
// const userName = user.userName;
// const email = user.email;
// const classInfor = user.className;

const { userName, email, className: classInfor } = user;
console.log(userName, email, classInfor);

const myObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
const { a: _a, b: _b, ...myObj1 } = myObj;
console.log(myObj1);
const { a: __a, c: __c, ...myObj2 } = myObj;
console.log(myObj2);

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , ...myArr1] = myArr;
console.log(myArr1);

//7.object literal
const name = "Iphone 13";
const price = 25000000;
const type = "phone";

const key = "quantity";
const value = 100;

const product = {
  // nếu tên thuộc tính và tên biến để gán giá trị giống nhau,ta rút gọn như sau
  name,
  price,
  type,
  //khai báo động tên thuộc tính dựa vào giá trị của 1 biến
  [key]: value,
};
console.log(product);

//8.for...in, for..of
const colors = ["red", "green", "blue", "black", "white"];

for (let i in colors) {
  console.log(`value:${colors[i]},index:${i}`);
}
//for of  chỉ trả ra giá trị chứ ko trả ra chỉ mục được
for (let value of colors) {
  console.log(`value:${value}`);
}

// ngoài ra có thể dùng for..in để duyệt object
for (let key in product) {
  console.log(`key:${key}-value:${product[key]}`);
}
