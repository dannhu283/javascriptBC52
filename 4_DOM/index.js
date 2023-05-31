// Truy cập DOM bằng Javascript thông qua đối tượng document

// Truy cập thẻ body
console.log(document.body);
// Thêm style cho thẻ body
document.body.style.backgroundColor = "green";
document.body.style.color = "white";

// Truy cập tag bất kì bằng id
let titleEl = document.getElementById("title");
console.log("titleEl:", titleEl);
// Lấy ra nội dung của tag
console.log("Nội dung thẻ titleEl:", titleEl.innerHTML);
// Thay đổi nội dung của tag
titleEl.innerHTML = "Hello DOM";

// Nếu truy cập một tag bằng id không tồn tại thì sẽ trả ra null
let testEl = document.getElementById("test");
console.log("testEl:", testEl);
// null không có các thuộc tính innerHTML hay style như 1 tag bình thường nên chương trình sẽ bị lỗi
// testEl.innerHTML = "Test"

// Truy cập tag input bằng id
let inputBrandEl = document.getElementById("brand");
// Lấy ra giá trị của tag input
console.log("Giá trị tag input:", inputBrandEl.value);
// Thay đổi giá trị của tag input
inputBrandEl.value = "cybersoft academy";

// Thay đổi style của tag
let p1El = document.getElementById("content-1");
// Cách 1:
p1El.style.color = "red";
p1El.style.backgroundColor = "blue";
// Cách 2:
p1El.style = "font-size: 16px; color: red; background-color: blue";

// Thay đổi class của tag
let p2El = document.getElementById("content-2");
// Thêm class
p2El.classList.add("title", "active", "content");
// Xoá class
p2El.classList.remove("content");
// toggle class: Nếu tag đã có class => xoá đi, ngược lại chưa có thì thêm vào
p2El.classList.toggle("test");

// ** Hàm (sẽ được học kĩ hơn ở buổi 5)
// Những đoạn mã bên trong hàm mặc định sẽ không được thực thi
function showMessage() {
  let username = "Yasuo";
  console.log(`Hello ${username}`);
}
// Ta cần thực hiện thao tác gọi hàm để thực thi những đoạn mã bên trong hàm
showMessage();

// Bài tập 1:
function changeContent() {
  document.getElementById("content-3").innerHTML = "Đã thay đổi rồi nhé";
}
// Bài tập 2:
function toggleHide() {
  document.getElementById("content-4").classList.toggle("hide");
}
// Bài tập 3:
function turnOn() {
  document.getElementById("img-1").src = "./img/picon.gif";
}
function turnOff() {
  document.getElementById("img-1").src = "./img/pic_bulboff.gif";
}
// Bài tập 4:
function disableInputAndButton() {
  document.getElementById("input-1").disabled = true;
  document.getElementById("button-1").disabled = true;
}
// Bài tập 5:
function login() {
  // Lấy giá trị của 2 input tài khoản và mật khẩu
  let username = document.getElementById("input-username").value;
  let password = document.getElementById("input-password").value;

  // Hiển thị kết quả
  let outputEl = document.getElementById("output-1");
  outputEl.innerHTML = `${username} - ${password}`;
  outputEl.classList.remove("hide");
  outputEl.style.backgroundColor = "blue";
  outputEl.style.color = "red";
}

// Tạo động và thêm phần tử vào html bằng javascript

// Cú pháp tạo mới một phần tử html
let h1El = document.createElement("h1");
h1El.innerHTML = "Cybersoft";
// Đưa thẻ h1 vào trong body
document.body.appendChild(h1El);

let pEl = document.createElement("p");
pEl.innerHTML = "Javascript";
let containerEl = document.getElementById("container");
containerEl.appendChild(pEl);

// Bài tập 6:
function addProduct() {
  // B1: Lấy giá trị của 2 input tên sản phẩm và giá
  let productName = document.getElementById("product-name").value;
  let productPrice = document.getElementById("product-price").value;

  // B2: Hiển thị ra giao diện
  let tbody = document.getElementById("product-list");

  // Tạo thẻ tr và đưa vào trong thẻ tbody
  let tr = document.createElement("tr");
  tbody.appendChild(tr);

  // Tạo thẻ td chứa thông tin tên sản phẩm và đưa vào trong thẻ tr
  let tdName = document.createElement("td");
  tdName.innerHTML = productName;
  tr.appendChild(tdName);

  // Tạo thẻ td chứa thông tin giá sản phẩm và đưa vào trong thẻ tr
  let tdPrice = document.createElement("td");
  tdPrice.innerHTML = productPrice;
  tr.appendChild(tdPrice);
}
