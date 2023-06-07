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
let username = "dannd"
function showMsg() {
  username = "dan.nguyen"
  let msg = `Hello ${username}`
  console.log(msg);
}
showMsg();
// console.log("Biến msg:", msg); // Lỗi












