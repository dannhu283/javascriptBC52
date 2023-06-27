let studentA = {
  name: "Alice",
  className: "BC52",
  age: 20,

  calcScore(htm, css, js) {
    return (htm + css + js) / 3;
  },
};

let studentB = {
  name: "John",
  className: "BC52",
  age: 23,

  calcScore(htm, css, js) {
    return (htm + css + js) / 3;
  },
};
//constructor
function Student(name, className, age) {
  //ngầm định tạo ra 1 đối tượng this={}
  this.name = name;
  this.className = className;
  this.age = age;

  //ngầm định return về đối tượng this ở trên
}

Student.prototype.getInfor = function () {
  console.log(`Name : ${this.name} - Class: ${this.className}`);
};

Student.prototype.calcScore = function (htm, css, js) {
  return (htm + css + js) / 3;
};
// sử dụng constructor
let studentC = new Student("Jack", "BC52", 24);
console.log("studentC:", studentC);
studentC.getInfor();
console.log("score:", studentC.calcScore(8, 9, 10));

let studentD = new Student("Thinh", "BC52", 28);
console.log("studentC:", studentD);
studentD.getInfor();
