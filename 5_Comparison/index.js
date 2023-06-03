// Toán tử so sánh:
// - So sánh bằng: ==, ===
// - So sánh khác: !=, !==
// - So sánh lớn, lớn hơn hoặc bằng: >, >=
// - So sánh bé, bé hơn hoặc bằng: <, <=
// => Kết quả trả về của phép toán so sánh là boolean (true/false)

// So sánh number (số)
console.log("5 == 5", 5 == 5); // true
console.log("3 == 8", 3 == 8); // false
console.log("'7' == 7", "7" == 7); // true
console.log("'9' === 9", "9" === 9); // false

console.log("3 != 3", 3 != 3); // false
console.log("'3' != 3", "3" != 3); // false
console.log("'3' !== 3", "3" !== 3); // true

console.log("5 > 7", 5 > 7); // false
console.log("'2' > 1", "2" > 1); // true

// So sánh string (chuỗi)
console.log("'Annie' > 'Alice'", "Annie" > "Alice"); // true
console.log("'Apple' > 'Banana'", "Apple" > "Banana"); // false
console.log("'15' > '2'", "15" > "2"); // false

// Ép kiểu chuỗi về số
let a = "100";
let b = "100N";

console.log("Chuyển chuỗi a thành số - cách 1:", +a);
console.log("Chuyển chuỗi a thành số - cách 2:", parseInt(a));

console.log("Cố tình ép kiểu một chuỗi không hợp lệ về số:", +b);

// Lưu ý: mọi giá trị lấy từ html đều là chuỗi, nếu muốn tính toán các giá trị là số ta cần ép kiểu giá trị về số
let num1 = document.getElementById("input-1").value; // "100"
let num2 = document.getElementById("input-2").value; // "300"
let total = num1 + num2; // "100300"



