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

let data = "Hello BC52 BC52"
let replaceData = data.replace("BC52", "World")
console.log("replace:", replaceData);

let replaceAllData = data.replaceAll("BC52", "World")
console.log("replaceAll:", replaceAllData);

let str = "ABC*123$XYZ"
let replaceAllStr = str.replaceAll(/[*$&!@]/g, " ")
console.log("replaceAllStr:", replaceAllStr);








