//Khai baso ra 1 objec
let car = {
  //khai báo thuộc tính(property) cho object
  //key:value
  brand: "Toyota",
  color: "Sliver",
  weight: 1000,
};
// truy cập các thuộc tính của object bằng toán tử
console.log("brand:", car.brand);
//truy cập các thuộc tính của object bằng object ["property"]
console.log("color:", car["color"]);
//truy cập động các thuộc tính của object bằng giá trị của 1 biên
let key = "weight";
console.log(car[key]); //car["weight"]

//thay đổi giá trị của các thuộc tính
car.color = "red";
console.log("new color:", car.color);
//thêm thuộc tính
car.price = 5e8;
console.log("object car sau khi thêm thuộc tính price:", car);

//xóa thuộc tính
delete car.weight;
console.log("object car sau khi xóa thuộc tính weight:", car);

//kiểm tra 1 thuộc tính có tồn tại trong object hay không
//khi truy cập đến 1 thuộc tính không tồn tại thì trả ra undefine
if (car.power) {
  console.log("thuộc tính power có tồn tại ");
}
//hoặc sử dụng từ khóa in để kiểm tra
if ("price" in car) {
  console.log("thuộc tính price có tồn tại");
}

//
let user = {
  //thuộc tính
  name: "Alice",
  age: 17,
  //phuowng thức
  sayHi() {
    //từ khóa "this" : đại diện cho đối tượng gọi tới phương thức(không hỗ trợ arrow function)
    // console.log(`Hello ${user.name}`);
    console.log(`Hi ${this.name}`);
  },
  //không sử dụng arrow function để định nghĩa phương thức cho object vì arrow function không định nghĩa từ khóa this,mà nó sẽ sử dụng this của hamfg bao bọc lấy nó(nếu có)
  // sayHello: () => {
  //   console.log("sayHello", this);
  //   console.log(`Hello ${this.name}`);
  // },
};
user.sayHi();
