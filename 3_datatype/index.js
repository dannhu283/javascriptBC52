// number
let age = 25;
console.log("age:", age);
let number = 12.5;
console.log("number:", number);
let total = 1_000_000;
console.log("total:", total);

let a = 8;
let b = 13;
// sử dụng toán tử  + _ * / %(chia laấy phần dư)
let c = a + b;
console.log("c=", c);
let d = b - a;
console.log("d:", d);
let e = b * a;
console.log("e:", e);
let f = b / a;
console.log("f:", f);
let h = b % a;
console.log("h:", h);

// toán tử ++ --
let g = a++; //gán trước
console.log("g:", g, "a:", a);
let i = ++a;
console.log("i:", i, "a:", a);

// toán tử gán =,  += ,  -+ , *=,  /=,  %=
a = a + 3; //tương đương a+=3
b *= 2; //tương đương b=b*2
console.log("b:", b);
b %= 4;
console.log("b:", b);
//trường hợp cố tình thực hiện 1 phép tính không hợp lệ thì sẽ trả kết quả là NaN
console.log("Hello" / 5);
let AB = 3;
let AC = 4;

// Math.pow(3, 2); //tính 3^2
// Math.sqrt(25); //tính căn bậc 2 của 25

let BC = Math.sqrt(Math.pow(AB, 2) + Math.pow(AC, 2));
console.log("bài tập 1 - cạnh BC=", BC);

// Math.floor; //làm tròn xuống
console.log(Math.floor(1.5));
// Math.ceil; //làm tròn lên
console.log(Math.ceil(1.6));
// Math.round // làm tròn lên số nguyên gân nhất
console.log(Math.round(2.4));

// bài tập 2 ,nhập vào n nguyên dương có 3 ký số,tính tổng 3 kí số(123=1+2+3)
// cách 1:
// let n = 429;
// a = Math.floor(n / 100);
// b = Math.floor((n % 100) / 10);
// c = n % 10;
// n = a + b + c;
// console.log("n=", n);
// cách 2
let n = 456;
let sum = 0;
sum += n % 10; //sum=6
n = Math.floor(n / 10); //n=45
sum += n % 10; //sum=6+5
n = Math.floor(n / 10); //n=4
sum += n;
console.log("bài tập 2 -sum =", sum);
// ===================================================================================
// string (chuỗi)(có thể đọc trong nháy đôi hoặc nháy đơn)
let message = "hello bc52";
let username = "nhu";
let firstName = "tran";
let lastName = "nhu";
// nối chuối bằng toán tử cộng
let fullName = firstName + " " + lastName;
console.log("fullName:", fullName);
// chuỗi sử dụng dấu backtick ``
let content = `
abc
123
haha`;
console.log("content:", content);
let street = "cao thắng";
let district = "quận 3";
let city = "hồ chí minh";
let address = `${street}, ${district}, ${city}`;
console.log("địa chỉ:", address);
// :nhằm tạo một biến với giá trị đại diện cho rỗsng
let birthday = null;
//undefined : mang ý nghĩa biến chưa được gắn giá trị
let product;
console.log("product:", product);
// boolean: kiểu dữ liệu luận lí, chỉ mang 2 giá trị đúng hoặc sai
//cách đặt tên các biến boolean thường có chữ is ,has,should,... đằng trước
let isActive = true;
// từ khóa typeof dùng để kiểm tra kiểu dữ liệu của 1 biến
console.log("typeof isActive:", typeof isActive);
console.log("typeof product:", typeof product);
console.log("typeof address:", typeof address);
