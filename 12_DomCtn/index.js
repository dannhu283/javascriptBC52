//truy cập phần tử bằng tag name
let pEls = document.getElementsByTagName("p");
console.log("pEls: ", pEls);
for (let i = 0; i < pEls.length; i++) {
  pEls[i].style.color = "green";
  pEls[i].style.fontWeight = "bold";
}

// truy cập phần tử  bằng class name
let p1Els = document.getElementsByClassName("p-5");
console.log("p1Els:", p1Els);

for (let j = 0; j < p1Els.length; j++) {
  p1Els[j].style.color = "black";
}

// querySelector :trả về phần tử đầu tiên tìm thấy
// Selector id : #title
// Selector class: .title
// Selector tag: p,h1,...
let firstP1El = document.querySelector(".p-5");
console.log(firstP1El);

//querySelectorAll(selector): trả về danh sách các phần tử trùng khớp vs seletor truyền vào
let liEls = document.querySelectorAll(".list>li");
console.log("liEls:", liEls);

//ví dụ
let liActiveEl = document.querySelectorAll(".list>li.active");
console.log("liActiveEl", liActiveEl);
