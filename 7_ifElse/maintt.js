//toán tử bậc 3
//let result =( biểu thức điều kiện) ? valueA : valueB
let age = 18;
// let allowed;
// if (age >= 18) {
//   allowed = true;
// } else {
//     allowed=false;
// }
// let allowed = age >= 18 ? true : false;
// switch(){
//     case valueA :{
//         ...
//         break;
//     }
//     case valueB :{
//         ...
//         break;
//     }
// }
// ví dụ tính số ngày trong tháng
function ex4() {
  let month = +document.getElementById("input-month").value;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("thangs có 31 ngày");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert("tháng có 30 ngày");
      break;
    case 2:
      alert("tháng có 28 ngày ");
      break;
    default:
      alert("thàng không hợp lệ");
      break;
  }
}
