// Number
let age = 25;
console.log("age:", age);
let number = 12.5;
console.log("number:", number);
let total = 1_000_000;
console.log("total:", total);

let a = 8;
let b = 13;

// Sử dụng toán tử: +, -, *, /, % (chia lấy phần dư)
let c = a + b;
console.log("c:", c);
let d = b - a;
console.log("d:", d);
let e = a * b;
console.log("e:", e);
let f = b / a;
console.log("f:", f);
let g = b % a;
console.log("g:", g);

// Toán tử: ++, --
let h = a++;
console.log("h:", h, "a:", a);
let i = ++a;
console.log("i:", i, "a:", a);

// Toán tử gán: =, +=, -=, *=, /=, %=
a = a + 3;
b += 3; // Tương đương b = b + 3
b *= 2; // Tương đương b = b * 2

// Trường hợp cố tình thực hiện một phép tính không hợp lệ
console.log("Hello" / 5); // NaN

// Bài tập 1: Tính cạnh huyền khi biết 2 cạnh góc vuông
let AB = 3;
let AC = 4;
let BC = Math.sqrt(Math.pow(AB, 2) + Math.pow(AC, 2));
console.log("Bài tập 1: Cạnh BC =", BC);

// Math là một đối tượng có sẵn trong Javascript, nó cung cấp các phương thức làm việc với toán học
// Math.pow(3, 2) // Tính 3 mũ 2
// Math.sqrt(25) // Tính căn bậc 2 của 25
console.log("Math.floor(1.5):", Math.floor(1.5)); // Làm tròn xuống số nguyên gần nhất
console.log("Math.ceil(1.3):", Math.ceil(1.3)); // Làm tròn lên số nguyên gần nhất
console.log("Math.round(2.3):", Math.round(2.3)); // Làm tròn tới số nguyên gần nhất

// Bài tập 2: Nhập vào n nguyên dương có 3 ký số, tính tổng 3 ký số đó
// VD: n = 123 => 1 + 2 + 3 = 6
let n = 429;
let sum = 0;

sum += n % 10; // sum = 0 + 9
n = Math.floor(n / 10); // n = 42

sum += n % 10; // sum = 9 + 2
n = Math.floor(n / 10); // n = 4

sum += n; // sum = 11 + 4
console.log("Bài tập 2: sum =", sum);

// ==========================================================================

// String (chuỗi)
let message = "Hello BC52";
let username = "alice";

let firstName = "Hieu";
let lastName = "Dang";

// Nối chuỗi bằng toán tử +
let fullName = firstName + " " + lastName;
console.log("fullName:", fullName);

// Chuỗi sử dụng dấu backtick ``

// Cho phép xuống hàng trong chuỗi
let content = `
  ABC
  123
  XYZ
`;
console.log("content:", content);

// Cho phép nối chuỗi một cách liền mạch hơn
let street = "Cao Thắng";
let district = "Quận 3";
let city = "Hồ Chí Minh";
// let address = street + ", " + district + ", " + city
let address = `${street}, ${district}, ${city}`;
console.log("address:", address);

// null: nhằm tạo một biến với giá trị đại diện cho không gì cả, rỗng, hoặc giá trị chưa biết
let birthday = null;
console.log("birthday:", birthday);
birthday = "25/05/2002";

// undefined: mang ý nghĩa biến chưa được gán giá trị
// Khởi tạo biến không gán giá trị thì giá trị mặc định là undefined
let product;
console.log("product:", product);
// Hoặc có thể khởi tạo biến mang giá trị undefined
let data = undefined;

// Boolean: kiểu dữ liệu luận lý, chỉ mang 2 giá trị true hoặc false
// true: mang nghĩa là đúng
// false: mang nghĩa là sai
// Cách đặt tên các biến boolean: thường có chữ is..., has..., should...
let isActive = true;

// Từ khoá "typeof": Dùng để kiểm tra kiểu dữ liệu của 1 biến
console.log("typeof isActive:", typeof isActive);
console.log("typeof product:", typeof product);
console.log("typeof address:", typeof address);










