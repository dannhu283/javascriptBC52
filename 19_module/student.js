export function Student(name, email, classname) {
  // khi quản lí thwo cơ chế module,để function Student có thể sử dụng được ở file index.js ta cần phải export nó
  this.name = name;
  this.email = email;
  this.classname = classname;
}

// có thể sử dụng export default thay thế cho export nhưng default chỉ  được sủ dụng 1 lần trong 1 file và khi khai báo import thì không cần dấu {}
