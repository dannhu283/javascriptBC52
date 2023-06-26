// các phương thức của các kiểu dữ liệu cơ bản

//--Number
let a = 1e8;
console.log("toLocalString:", a.toLocaleString());
let b = 123.45678;
console.log("toFixed:", b.toFixed(2));
let c = 10;
console.log("toString:", c.toString());

//phương thức của đối tượng math
console.log("Số lớn nhất", Math.max(3, 8, 35, 9));
console.log("Số nhỏ nhất", Math.min(3, 8, 35, 9));
console.log("số ngẫu nhiên:", Math.random());

//random số ngẫu nhiên trong khoảng min-> max
// Math.floor(Math.random() * (max - min) + min);
let random = Math.floor(Math.random() * (100 - 50) + 50);
console.log("math.random:", random);

//--string
let msg = "Hello Cybersoft";

//viết hoa
console.log(msg.toUpperCase());

//viết thuờng
console.log(msg.toLowerCase());
let userName = "      Bob     ";

//trim,trimEnd,trimStart loại bỏ khoảng trắng
console.log("trim :", userName.trim());

//slice cắt kí tự trong chuỗi dựa vào chỉ mục và xuất ra giá trị đó
console.log("slice:", msg.slice(0, 5));

//tìm kiếm
let indexCyberSoft = msg.indexOf("Cybersoft");
console.log(indexCyberSoft);

let includeCybersoft = msg.includes("Cybersoft");
console.log(includeCybersoft);

//replace
let data = "Hello BC52 BC52";
//thay thế chuỗi con đầu tiên tìm thấy
let replaceData = data.replace("BC52", "World");
console.log("replace", replaceData);
//thay thế tất cả chuỗi con tìm thấy
let replaceAllData = data.replaceAll("BC52", "World");
console.log("replaceAll", replaceAllData);

// let str = "abc*&235/*^nhu";
// let replaceAllStr = str.replaceAll(/[*&/*^]/, " ");
// console.log(replaceAllStr);

//primitive value & reference value
//primitive value : number,string ,boolean,null,undefined
//reference value: array,object (bản chất của reference value chỉ lưu vị trí vùng nhớ nên không sử dụng phép so sánh bằng)
let x = 5;
let y = x;
y++;
console.log("x,y:", x, y);

let obj = { name: "A", age: 18 };
let obj1 = obj;
obj1.name = "B";
console.log("obj,obj1,", obj, obj1);

//để sao chép ra 1 ob mới kế thừa tất cả thuộc tính và phương thức của ob hiện tại sử dụng Object.assign() hoặc {...ob cần sao chép}
// let obj2 = Object.assign({}, obj);
let obj2 = { ...obj };
obj2.name = "D";
obj2.age = 40;
console.log("obj ,obj2:", obj, obj2);

let arr = [1, 3, 5];
let arr1 = arr;
arr1.push(8);
console.log("arr,arr1:", arr, arr1);
//sao chép ra 1 arr mới kế thừa tất cả phàn tử của arr hiện tại thì sử dụng slice hoặc [...arr cần sao chép]
// let arr2 = arr.slice();
let arr2 = [...arr];
arr2.push(9);
console.log("arr, arr2", arr, arr2);

//các phương thức nâng cao của mảng
//-map
let number = [1, 2, 3, 4, 5];

let numX2 = [];
for (let i = 0; i < number.length; i++) {
  let value = number[i] * 2;
  numX2.push(value);
}
console.log("numX2", numX2);

let numX3 = number.map(callBackNumX3);
function callBackNumX3(value, index) {
  return value * 3;
}
console.log("numX3", numX3);
let numX4 = number.map((value, index) => {
  return value * 4;
});
console.log("numX4", numX4);

//--filter (return về true hoặc false)
let numsOdd = number.filter((value, index) => {
  return value % 2 !== 0;
});
console.log("số lẻ:", numsOdd);

//-reduce
//[1,2,3,4,5]
let total = number.reduce((result, value, index) => {
  return result + value;
}, 0);

// Lần 1: value=1;result=0  =>result+return=1
// Lần 2: value=2;result=1  =>result+return=3
// Lần 3: value=3;result=3  =>result+return=6
// Lần 4: value=4;result=6  =>result+return=10
// Lần 5: value=5;result=10  =>result+return=15

let products = [
  { id: 1, name: "Iphone 13 promax", brand: "apple", price: 3e7 },
  { id: 2, name: "Samsung S23 ultra", brand: "Samsung", price: 28e6 },
  { id: 3, name: "Oppo X5", brand: "Oppo", price: 18e6 },
  { id: 4, name: "Xiaomi Mi 13", brand: "Xiaomi", price: 15e6 },
  { id: 5, name: "Iphone 14", brand: "apple", price: 4e7 },
  { id: 6, name: "Samsung Galaxy", brand: "Samsung", price: 2e7 },
];
//yc1:trar ra mảng mới chỉ bao gồm tên các sản phẩm
let productName = products.map((value) => {
  return value.name;
});
console.log(productName);

//yc2 :trả ra mảng mới trả ra sp của oppo
let productOppo = products.filter((value) => {
  return value.brand === "Oppo";
});
console.log(productOppo);

//yc3: từ mảng product,hiển thị ra giao diện theo cấu trúc sau
/*
<ul id="product-list">
  <li> Iphone 13 promax - 32e6</li>
  <li> SamSung- 28e6</li>
  <li> Oppo X5-18e6 </li>
  ...
</ul>;
*/
// let html = product.reduce((value, result) => {
//   return (
//     result +
//     (
//       <li>
//         ${value.name} - ${value.price}
//       </li>
//     )
//   );
// }, "");
// console.log("html:", html);
// document.getElementById("product-list").innerHTML = html;

//find,findIndex

// Tìm sp có id=3
let product = products.find((value) => {
  return value.id === 3;
});
console.log("product id=3:", product);
let productIndex = products.findIndex((value) => {
  return value.id === 5;
});
console.log("productIdex", productIndex);

//-forEach
products.forEach((value, index) => {
  console.log(`Product ${value.id}-${value.name}`);
});
