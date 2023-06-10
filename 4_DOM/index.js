//truy cập dom bằng javascript thông qua đối tượng document

//truy cập vào thẻ body
console.log(document.body);
// thêm style cho thẻ body
document.body.style.backgroundColor = "white";
document.body.style.color = "blue";
//truy cập 1 thẻ bất kì bằng id
let titleEL = document.getElementById("title");
console.log(titleEL);
//lấy ra nội dung của thẻ h1
console.log("nội dung thẻ title:", titleEL.innerHTML);
// thay đổi nội dung của tag
titleEL.innerHTML = "Hello DOM";
// nếu truy cập 1 thẻ bằng id không tồn tại thì sẽ trả ra là null
let testEL = document.getElementById("test");
console.log("testEL:", testEL);
//null không có thuộc tính innerHTML hay style như 1 tag bt nên chương trình sẽ bị lỗi

//truy cập tag input bằng id
let inputBrandEL = document.getElementById("brand");
// lấy giá giá trị thẻ input
console.log("nội dung thẻ input:", inputBrandEL.value);
//thay đổi giá trị thẻ input
inputBrandEL.value = "cybersoft academy";
let p1El = document.getElementById("content-1");
p1El.style.color = "blue";
p1El.style.background = "white";
p1El.style.textAlign = "center";
p1El.style.fontWeight = "bold";
p1El.style.fontSize = "30px";
//  nhiều thuộc tính chung(phải tự viết tay các thuộc tính,không nhắc lệnh)
//p1El.style = "font-size:24px;color:white;background-color:green";
//thay đổi class của tag
let p2El = document.getElementById("content-2");
//theem class
p2El.classList.add("title", "active", "content");
//xóa class
p2El.classList.remove("content");
//toggle class (thêm hoặc xóa class ,nếu đang có thì tự động xóa đi,chưa có thì thêm vào)
p2El.classList.toggle("test");
//hàm(sẽ được học kĩ hơn ở buổi 5)f
//nhưng đoạn mã bên trong hàm sẽ không được thực thi
function showMessage() {
  let userName = "Yasuo";
  console.log(`hello ${userName}`);
}
showMessage();

function baiTap1() {
  let Infor = document.getElementById("infor");
  Infor.innerHTML = "Nội dung sau khi thay đổi";
  Infor.style.color = "blue";
}

function toggleAH() {
  let p4El = document.getElementById("content-4");
  p4El.classList.toggle("hide");
}

function turnOn() {
  let image = document.getElementById("content-5");
  image.src = "./img/pic_bulbon.gif";
}
function turnOff() {
  let image = document.getElementById("content-5");
  image.src = "./img/pic_bulboff.gif";
}
function disable() {
  let disableBT = document.getElementById("content-6");
  disableBT.disabled = "false";
  let disableBT1 = document.getElementById("content-7");
  disableBT1.disabled = "false";
}
function login() {
  let hidden = document.getElementById("ip-1").value;
  let hidden1 = document.getElementById("ip-2").value;
  let outputEl = document.getElementById("output");
  outputEl.innerHTML = `${hidden}- ${hidden1}`;
  outputEl.classList.remove("hide");
  outputEl.style.color = "red";
  outputEl.style.backgroundColor = "blue";
}
//tạo động và thêm phần tử vào html bằng js
let h1El = document.createElement("h1");
h1El.innerHTML = "cyber";
console.log(h1El);
//hiện thẻ lên html
document.body.appendChild(h1El);

let pEl = document.createElement("h3");
pEl.innerHTML = "js";
let containerEl = document.getElementById("lorem");
containerEl.appendChild(pEl);
function addProduct() {
  //b1:lấy giá trị của 2 thẻ input
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;
  // b2: hieển thị ra giao diện
  let tbody = document.getElementById("product-list");
  //tạo thẻ tr và đưa vào trong thẻ tbody
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
  //tạo thẻ td chưa thông tin tên sản phầm và đưa vào trong thẻ tr
  let tdName = document.createElement("td");
  tdName.innerHTML = productName;
  tr.appendChild(tdName);
  let tdPrice = document.createElement("td");
  tdPrice.innerHTML = productPrice;
  tr.appendChild(tdPrice);
}
//cách 2
function addProduct2() {
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;
  let tbody = document.getElementById("product-list");
  let html = `
  <tr>
  <td>${productName}</td>
  <td>${productPrice}</td>
  </tr>
  `;
  tbody.innerHTML += html;
}
