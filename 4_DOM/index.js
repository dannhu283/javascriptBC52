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


