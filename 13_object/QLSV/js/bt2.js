//danh sách sv do user nhập vào
let students = [];
function addStudent() {
  //b1: dom laấy giá trị từ user nhập
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let dateOfBirth = document.getElementById("txtNgaySinh").value;
  let course = document.getElementById("khSV").value;
  let math = +document.getElementById("txtDiemToan").value;
  let physics = +document.getElementById("txtDiemLy").value;
  let chemistry = +document.getElementById("txtDiemHoa").value;

  //b2 khởi tạo đối tượng student
  let student = new Student(
    id,
    name,
    email,
    password,
    dateOfBirth,
    course,
    math,
    physics,
    chemistry
  );
  //b3:thêm đối tượng
  students.push(student);
  //b4: hiển thị ds sv ra giao diện
  display(students);
  //b5: reset form
  resetForm();
}
function findStudent() {
  //b1:dom
  let search = document.getElementById("txtSearch").value;
  search = search.trim().toLowerCase();
  //B2:lọc các sinh viên có tên khớp vs giá trị tìm kiếm
  let newStudents = students.filter((value) => {
    let name = value.name.trim().toLowerCase();
    return name.includes(search);
  });
  //B3:hiển thị ra giao diện
  display(newStudents);
}
function removeStudent(studentId) {
  // tìm index của phần tử có id trùng khớp với giá trị studentId
  //   let index = students.findIndex((value) => {
  //     return value.id === studentId;
  //   });
  //   if (index !== -1) {
  //     students.splice(index, 1);
  //   }
  students = students.filter((value) => {
    return value.id !== studentId;
  });
  display(students);
}
function selectStudent(studentId) {
  let student = students.find((value) => {
    return value.id === studentId;
  });
  //fill thông tin của student lên giao diện
  document.getElementById("txtMaSV").value = student.id;
  document.getElementById("txtTenSV").value = student.name;
  document.getElementById("txtEmail").value = student.email;
  document.getElementById("txtPass").value = student.password;
  document.getElementById("txtNgaySinh").value = student.dateOfBirth;
  document.getElementById("khSV").value = student.course;
  document.getElementById("txtDiemToan").value = student.math;
  document.getElementById("txtDiemLy").value = student.physics;
  document.getElementById("txtDiemHoa").value = student.chemistry;
  //disable ip mã sv và button thêm sv
  document.getElementById("txtMaSV").disabled = true;
  document.getElementById("btnAdd").disabled = true;
}
function updateStudent() {
  //b1: dom laấy giá trị từ user nhập
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let dateOfBirth = document.getElementById("txtNgaySinh").value;
  let course = document.getElementById("khSV").value;
  let math = +document.getElementById("txtDiemToan").value;
  let physics = +document.getElementById("txtDiemLy").value;
  let chemistry = +document.getElementById("txtDiemHoa").value;
  //b2 khởi tạo đối tượng student
  let student = new Student(
    id,
    name,
    email,
    password,
    dateOfBirth,
    course,
    math,
    physics,
    chemistry
  );
  let index = students.findIndex((value) => {
    return value.id === id;
  });
  students[index] = student;
  display(students);
}
//hàm nhận vào mảng students và hiển thị ra giao diện table
function display(students) {
  let html = students.reduce((result, value) => {
    return (
      result +
      `
        <tr class="text-center">
        <td>${value.id}</td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.dateOfBirth}</td>
        <td>${value.course}</td>
        <td>${value.calcScore()}</td>
        <td>
         <button class="btn btn-warning"onclick="selectStudent('${
           value.id
         }')">Chỉnh Sửa</button>
         <button class="btn btn-danger"onclick="removeStudent('${
           value.id
         }')">Xóa</button>
        </td>
        </tr>
        `
    );
  }, "");
  document.getElementById("tbodySinhVien").innerHTML = html;
}
//hàm reset giá trị của form
function resetForm() {
  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtNgaySinh").value = "";
  document.getElementById("khSV").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemLy").value = "";
  document.getElementById("txtDiemHoa").value = "";
  document.getElementById("txtMaSV").disabled = false;
  document.getElementById("btnAdd").disabled = false;
}
