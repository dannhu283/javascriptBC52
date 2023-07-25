import { Student } from "./student.js";
// import { sayHi, sayHello } from "./greeting.js";

//có thể gán tất cả các function trong cùng 1 file với cú pháp rút gọn
import * as greeting from "./greeting.js";

import { sum as mathSum } from "./math.js";

const student1 = new Student("alice", "alice@gmail.com", "BC52");
console.log(student1);

greeting.sayHi(student1.name);
greeting.sayHello(student1.name);

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));

console.log(mathSum(7, 8, 9, 4));

document.getElementById("btn-add").onclick = () => {
  const random = Math.floor(Math.random() * 100);
  const product = {
    id: random,
    name: `product-${random}`,
  };
  document.getElementById("product-list").innerHTML += `
    <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>
        <button class="btn btn-warning" data-id="${product.id}" data-type="update">update</button>
            <button class="btn btn-danger" data-id="${product.id}" data-type="delete">delete</button>
        </td>
    </tr>
  `;
};

document.getElementById("product-list").onclick = (event) => {
  const element = event.target;
  const id = element.getAttribute("data-id");
  const type = element.getAttribute("data-type");
  console.log("id", id, "type:", type);
};

// // tạo động button bằng js
// document.body.innerHTML += `<button class="btn btn-warning" id="btn-hello">Hello</button>`;

// document.getElementById("btn-hello").onclick = () => {
//   greeting.sayHello("đan như");
// };
