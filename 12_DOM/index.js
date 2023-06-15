// Truy cập phần tử bằng tag name
let pEls = document.getElementsByTagName("p");
console.log("pEls:", pEls);
for (let i = 0; i < pEls.length; i++) {
  pEls[i].style.color = "green";
}

// Truy cập phần tử bằng class name
let p1Els = document.getElementsByClassName("p-1");
console.log("p1Els:", p1Els);
for (let i = 0; i < p1Els.length; i++) {
  p1Els[i].style.fontSize = "30px";
}

// querySelector(selector): Trả về phần tử đầu tiên khớp selector
// selector id: #title
// selector class: .title
// selector tag: p, h1, div, ...

let firstP1El = document.querySelector(".p-1")
console.log("firstP1El:", firstP1El);

// querySelectorAll(selector): Trả về danh sách các phần tử khớp selector
let liEls = document.querySelectorAll(".list > li")
console.log("liEls:", liEls);

let activeLiEl = document.querySelector(".list li.active")
console.log("activeLiEl:", activeLiEl);









