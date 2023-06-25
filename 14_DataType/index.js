// Phương thức của các kiểu dữ liệu cơ bản

// - Number
let a = 100000000;
console.log("toLocaleString:", a.toLocaleString());

let b = 1234.56789;
console.log("toFixed:", b.toFixed(2));

let c = 10;
console.log("toString:", c.toString());

// Phương thức của đối tượng Math
let max = Math.max(3, 8, 15, 4);
console.log("Math.max:", max);

let min = Math.min(3, 8, 15, 4);
console.log("Math.min:", min);

// random ra số ngẫu nhiên trong khoảng min -> max:
// Math.floor(Math.random() * (max - min) + min)
let random = Math.floor(Math.random() * (100 - 50) + 50);
console.log("Math.random:", random);

// - String
let msg = "Hello Cybersoft";

let upperMsg = msg.toUpperCase();
console.log("toUpperCase:", upperMsg);

let lowerMsg = msg.toLowerCase();
console.log("toLowerCase:", lowerMsg);

let username = "          Bob             ";

// trim, trimEnd, trimStart
let trimUsername = username.trim();
console.log("trim:", trimUsername);

// let sliceMsg = msg.slice(0, 5);
let sliceMsg = msg.slice(6);
console.log("slice:", sliceMsg);

// let indexCybersoft = msg.indexOf("Hehe")
let indexCybersoft = msg.indexOf("Cybersoft");
console.log("indexOf:", indexCybersoft);

let includeCybersoft = msg.includes("Cybersoft");
console.log("includes:", includeCybersoft);

let data = "Hello BC52 BC52";
let replaceData = data.replace("BC52", "World");
console.log("replace:", replaceData);

let replaceAllData = data.replaceAll("BC52", "World");
console.log("replaceAll:", replaceAllData);

let str = "ABC*123$XYZ";
let replaceAllStr = str.replaceAll(/[*$&!@]/g, " ");
console.log("replaceAllStr:", replaceAllStr);

// primitive value & reference value
// primitive value: number, string, boolean, null, undefined
// reference value: array, object

let x = 5;
let y = x;
y++;
console.log("x, y:", x, y);

let obj = { name: "A", age: 18 };
let obj1 = obj;
obj1.name = "B";
console.log("obj, obj1:", obj, obj1);

// Sao chép ra 1 object mới, kế thừa tất cả thuộc tính và phương thức của object hiện tại
// let obj2 = Object.assign({}, obj);
let obj2 = { ...obj };
obj2.age = 25;
obj2.name = "C";
console.log("obj, obj2:", obj, obj2);

let arr = [1, 2, 3];
let arr1 = arr;
arr1.push(4);
console.log("arr, arr1:", arr, arr1);

// Sao chép ra 1 array mới, kế thừ tất cả phần tử của array hiện tại
// let arr2 = arr.slice()
let arr2 = [...arr];
arr2.push(5);
console.log("arr, arr2:", arr, arr2);

// Các phương thức nâng cao của mảng

// - map
let nums = [1, 2, 3, 4, 5];

let numsX2 = [];
for (let i = 0; i < nums.length; i++) {
  let value = nums[i] * 2;
  numsX2.push(value);
}
console.log("numsX2:", numsX2);

let numsX3 = nums.map(callBackNumX3);
function callBackNumX3(value, index) {
  return value * 3;
}
console.log("numsX3:", numsX3);

let numsX4 = nums.map((value, index) => {
  return value * 4;
});
console.log("numsX4:", numsX4);

// - filter
let numsOdd = nums.filter((value, index) => {
  return value % 2 !== 0;
});
console.log("numsOdd:", numsOdd);

// - reduce
// [1, 2, 3, 4, 5]
let total = nums.reduce((result, value, index) => {
  return result + value;
}, 0);
console.log("total:", total);

// Lần 1: value = 1, result = 0 => result + value = 1
// Lần 2: value = 2, result = 1 => result + value = 3
// Lần 3: value = 3, result = 3 => result + value = 6
// Lần 4: value = 4, result = 6 => result + value = 10
// Lần 5: value = 5, result = 10 => result + value = 15

let products = [
  { id: 1, name: "Iphone 13 promax", brand: "Apple", price: 32_000_000 },
  { id: 2, name: "Samsung S23 ultra", brand: "Samsung", price: 28_000_000 },
  { id: 3, name: "Oppo X5", brand: "Oppo", price: 18_000_000 },
  { id: 4, name: "Xiaomi Mi 13", brand: "Xiaomi", price: 15_000_000 },
  { id: 5, name: "Iphone 13", brand: "Apple", price: 27_000_000 },
  { id: 6, name: "Samsung Note 20", brand: "Samsung", price: 20_000_000 },
];

// YC1: Trả ra 1 mảng mới chỉ bao gồm tên của các sản phẩm
// ["Iphone 13 promax", "Samsung S23 ultra", "Oppo X5", "Xiaomi Mi 13", "Iphone 13", "Samsung Note 20"]
let productNames = products.map((value) => {
  return value.name;
});
console.log("productNames:", productNames);

// YC2: Trả ra 1 mảng mới chỉ bao gồm các sản phẩm của Apple
let productsApple = products.filter((value) => {
  return value.brand === "Apple";
});
console.log("productsApple:", productsApple);

// YC3: Từ mảng products, hiển thị ra giao diện theo cấu trúc sau
/**
 * <ul id="product-list">
 *  <li>Iphone 13 promax - 32_000_000</li>
 *  <li>Samsung S23 ultra - 28_000_000</li>
 *  <li>Oppo X5 - 18_000_000</li>
 *  ...
 * </ul>
 */

let html = products.reduce((result, value) => {
  return result + `<li>${value.name} - ${value.price}</li>`;
}, "");

console.log("html:", html);
document.getElementById("product-list").innerHTML = html;

// find, findIndex

// Tìm sản phẩm có id = 3
let product = products.find((value) => {
  return value.id === 3
})
console.log("product id = 3:", product);

// Tìm index của sản phẩm có id = 5
let productIndex = products.findIndex((value) => {
  return value.id === 5
})
console.log("index product id = 5:", productIndex);

// - forEach
products.forEach((value, index) => {
  console.log(`Product ${value.id} - ${value.name}`);
})











