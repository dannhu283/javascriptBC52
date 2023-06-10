//toán tử logic:
//--phủ định: !  (nghịch đảo giá trị boolean)
//-- và : &&  (trả về true nếu tất cả đều true)
//-- hoặc : || (trả về true nếu có ít nhất 1 true)
console.log("!true", !true); //false
let a = 5;
let b = 8;
let c = 11;
console.log(a < b && b < c); //true
console.log(b < a && b < c); //false
console.log(b < a || b < c); //false
// truthy value và falsy value
//false value: false,"",0,null,undefined, NaN
//truthy value:những giá trị còn lại
//toán tử || tìm giá trị truthy value đầu tiên
//let result = value1 || value2 || value2
let fullName = "";
let nickNmae = "bac";
let user = fullName || nickNmae || "incognito";
console.log("user", user);
// toán tử && tìm giá trị falsy value đầu tiền
// let result = value1 && value2 && value3;
let isLoggedIn = true;
let message = isLoggedIn && "welcome!!!!!!";
console.log("message:", message);
//toán tử ! ép kiểu dữ liệu về boolean
console.log("!0", !!0);
