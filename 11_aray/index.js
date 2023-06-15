let colorRed = "red";
let colorBlue = "blue";

// cú pháp tạo mạng
let colors = ["red", "green", "blue"];
let animals = ["dog", "cat", "duck"];
let scores = ["1", "3", "5", "23", "567"];
let emptyArr = [];

// lấy ra giá trị bất kì trong mảng bằng chỉ mục(chỉ mục bắt đầu từ 0)
//ví dụ muốn lấy phần tử green trong mảng color
console.log("colors[1]:", colors[1]);

//truy cập tới 1 chỉ mục trong mảng thì trả ra giá trị undefined
console.log("animals[10]: ", animals[10]);

//thay đổi giá trị của phần tử trong mảng
colors[1] = "yellow";
console.log("colors[1] sau khi thay đổi :", colors[1]);

//lấy ra độ dài của mảng(số lượng phần tử)
console.log("độ dài của mảng colors:", colors.length);

//dùng vòng lặp để duyệt mảng
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

//các phương thức làm việc với mảng
// -array.push(value,value1,...) : thêm 1 hoặc nhiều phần tử vào cuối mảng
colors.push("black", "orange", "white");
console.log("mảng colors sau khi push:", colors);

//-array.pop() : xóa 1 (chỉ một) phần tử ở cuối mảng và trả về chính phần tử đó
let lastColor = colors.pop();
console.log("mảng trả về sau khi pop:", colors);
console.log("giá trị trả về :", lastColor);

//- array.unshift(value,value1,...) : thêm 1 hoặc nhiểu phẩn tử vào đầu mảntg
colors.unshift("pink", "purple");
console.log("mảng colors sau khi unshift : ", colors);

//array.shift() : xóa 1 phần tử ở đâu mảng và trả về chính phần tử đó
let fisrtColor = colors.shift();
console.log("mảng trả về sau khi shift:", colors);
console.log("giá trị trả về :", fisrtColor);

//-array.splice(startIndex,deleteCount, value1,value2...)
animals.splice(2, 0, "cow", "pig");
console.log("mảng animal sau khi thêm :", animals);

let removeAnimals = animals.splice(3, 2);
console.log("giá trị trả về :", removeAnimals);
animals.splice(3, 2);
console.log("mảng animals sau khi xóa:", animals);

//-array.slice(start,end); copy ra 1 array mới từ vị trí start đến end(không bảo gồm end)
let newScores = scores.slice(1, 3);
console.log("mảng newscrores sau khi copy:", newScores);

// -array.concat(array1,array2,...) : tạo ra 1 mảng mới bao gổm tất cả phần tử của mảng ban đầu và các mảng được truyền vào

let concatArray = scores.concat(newScores);
console.log("mảng mới sau khi concat:", concatArray);

//-array.indexOf(value) : trả về vị trí chỉ mục của phần tử đầu tiên nếu tìm thấy,ngược lại trả về -1
//- array.lastindexOf() giống indexOf() nhưng kiểm tra vị trí chỉ mục từ  cuối mảng
let indexCat = animals.indexOf("cat");
if (indexCat !== -1) {
  console.log(" có giá trị cat trong animals");
} else {
  console.log("không có giá trị cat trong animals");
}
//ví dụ tìm phần tử không có trong mảng
let indexTiger = animals.indexOf("tiger");
if (indexTiger !== -1) {
  console.log(" có giá trị cat trong animals");
} else {
  console.log("không có giá trị tiger trong animals");
}

//-array.includes(value) trả về tru nếu tìm thấy ,ngược lại là false
let hasDuck = animals.includes("duck");
if (hasDuck) {
  console.log("có giá trị duck trong animals");
} else {
  console.log("không có giá trị duck trong animals");
}

//split/join :
// join chuyển đổi mảng thành chuỗi kèm kí tự phân cách
let date = [15, 6, 2023];
let str = date.join("/");
console.log(str);
// split chuyển chuỗi thành mảng dựa vào kí tự phân cách
let arr = str.split("/");
console.log(arr);

//array reverse() :đảo ngược các phần tử trong mảng
console.log("mảng trước khi đảo ngược:", colors);
colors.reverse();
console.log("mảng colors sau khi đảo ngược:", colors);

//mẹo để đảo ngược chuôi
let myString = "Hello CyberSoft";
let strArt = myString.split("");
strArt.reverse();
let newStr = strArt.join("");
console.log("chuỗi đảo ngược:", newStr);

// -array.sort() sắp xếp mảng
console.log("mảng animal trước khi sort:", animals);
animals.sort();
console.log("mảng sau khi sort:", animals);

// mặc định hàm sort sẽ chuyển các giá trị trong mảng về giá trị chuỗi để so sánh
// để sắp xếp sô ta sẽ viết giá trị 1 hàm so sánh,hàm này nhận vào 2 giá trị a,b ( tăng dần thì return a-b,ngược lại giảm dần thì b-a ),sau đó đưa hàm này vào làm tham số của hàm sort
function compare(a, b) {
  return a - b;
}
console.log("mảng scores trước khi sort", scores);
scores.sort(compare);
console.log("mảng scores sau khi sort", scores);
