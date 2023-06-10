//Toán tử so sánh
//-so sánh bằng : ==,===.
//-so sánh lớn,lớn hơn hoặc bằng : >, >=
//- so sánh bé,bé hơn hoặc bằng : <,<=
//- so sánh khác : != ,!==
//- kết quả trả về của phép toán so sánh là boolean(true/false)
// ====================//
//so sánh number
console.log("5==5", 5 == 5);
console.log("3==5", 3 == 5);
console.log("'9'== 9", "9" == 9); //true  //không phân biệt kiểu dữ liệu,tự động ép về cùng 1 kiểu để so sánh giá trị
console.log("'9'===9", "9" === 9); // false //-- === phân biệt kiểu dữ liệu
console.log("3 != 3", 3 != 3);
console.log("'3' != 3", 3 != 3);
console.log(" '3' !== 3", "3" !== 3);
console.log("5 > 7", 5 > 7);
// so sánh string
console.log("'Annie' > 'Aliced'", "Annie" > "Aliced"); //so sánh từng cặp kí tự trong chuỗi theo thứ tự của bảng mã ASCII
console.log(" '15' > '2' ", "15" > "2");
//ép kiểu dữ liệu
let a = "100";
let b = +a;
let c = "100n";
console.log("chuyển chuỗi a thành số-cách 2:", b);
console.log("chuyển chuỗi a thành số-cách 2:", parseInt(a));
//cố tình ép chuỗi không hợp lệ về số thì sẽ trả giá trị NaN
console.log("cố tình ép chuỗi c về số", +c);
//lưu ý: mọi giá trị lấy từ html đều là chuỗi nếu muốn tính toán các giá trị là số ta cần ép kiểu giá trị về số
let num1 = document.getElementById("input-1").value; //100
let num2 = document.getElementById("input-2").value; //200
let total = num1 + num2; //giá trị của total 100200
console.log("total", total);
