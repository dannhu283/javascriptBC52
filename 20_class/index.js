class Student {
  //  khởi tạo thuộc tính
  constructor(name, email, className) {
    this.name = name;
    this.email = email;
    this.className = className;
  }

  //khởi tạo phương thức
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

const student1 = new Student("nhu", "dannhu@gmail.com", "Bc52");
console.log(student1);
student1.sayHi();

// lập trình hưỡng đối tượng
// 4 tính chất của OOP: tính đóng gói,tính kế thừa,tính đa hình ,tính trừu tượng

//- tính kế thừa
class Employee {
  constructor(id, name, email, datOfBirth, address) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.datOfBirth = datOfBirth;
    this.address = address;
  }
  getInfor() {
    console.log(`ID:${this.id}-name:${this.name}-email:${this.email}`);
  }
  caclSalary() {}
}

// tạo class IT kế thừa class employee

class IT extends Employee {
  //ghi đè lại constructor của class cha
  constructor(id, name, email, datOfBirth, address, role, language) {
    //gọi va thực thi constructor của class cha
    super(id, name, email, datOfBirth, address);
    //sau đó khai báo các thuộc tính riêng của clasc It
    this.role = role;
    this.language = language;
  }

  // ghi đè lại phương thức của class cha
  caclSalary(salary) {
    return salary * 0.9;
  }
}

const it1 = new IT(
  1,
  "nhu",
  "dannhu@gmail.com",
  "28-3",
  "7  đường b6",
  "front-end",
  ["html,css,js"]
);

console.log(it1);
it1.getInfor();

class HR extends Employee {
  constructor(id, name, email, datOfBirth, address, responsibility) {
    super(id, name, email, datOfBirth, address);
    this.responsibility = responsibility;
  }
  caclSalary(salary) {
    const bonus = 1000;
    return (salary + bonus) * 0.95;
  }
}

const hr1 = new HR(
  2,
  "hien",
  "hien@gmail.com",
  "24-9",
  "8 tan hoa dong",
  "recruitment"
);
console.log(hr1);
hr1.getInfor();

/// Tính đa hình
let employees = [it1, hr1];

//  bởi vì tất cả các ob trong mảng đều kế thừa cùng 1 lớp cha ,nên ta không cần quan tâm phẩn tử hiện tại là đối tượng của lớp nào,ta chỉ cần biết nó chắc chắn cho phương thức tính lương

for (let employee of employees) {
  const salary = employee.caclSalary(2000);
  console.log(`${employee.name}-${salary}`);
}
