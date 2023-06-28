// Danh sách sinh viên
let students = [];

function addStudent() {
  // B1: DOM
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let dateOfBirth = document.getElementById("txtNgaySinh").value;
  let course = document.getElementById("khSV").value;
  let math = +document.getElementById("txtDiemToan").value;
  let physics = +document.getElementById("txtDiemLy").value;
  let chemistry = +document.getElementById("txtDiemHoa").value;

  // B2: Khởi tạo đối tượng student
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

  // B3: Thêm đối tượng student vừa tạo vào danh sách
  students.push(student);

  // B4: Hiển thị danh sách student ra giao diện
  display(students);

  // B5: Reset form
  resetForm();
}

function findStudent() {
  // B1: DOM
  let search = document.getElementById("txtSearch").value;
  search = search.trim().toLowerCase();

  // B2: Lọc các sinh viên có tên khớp với giá trị tìm kiếm
  let newStudents = students.filter((value) => {
    let name = value.name.trim().toLowerCase();
    return name.includes(search);
  });

  // B3: Hiển thị các sinh viên được tìm thấy ra giao diện
  display(newStudents);
}

function removeStudent(studentId) {
  // // Tìm index của phần tử student có id khớp với giá trị của studentId
  // let index = students.findIndex((value) => {
  //   return value.id === studentId;
  // });
  // // Dựa vào index để xoá phần tử đó khỏi mảng
  // if (index !== -1) {
  //   students.splice(index, 1);
  // }

  students = students.filter((value) => {
    return value.id !== studentId;
  });

  display(students);
}

function selectStudent(studentId) {
  // Tìm phần tử student có id khớp với giá trị của studentId
  let student = students.find((value) => {
    return value.id === studentId;
  });

  // Fill thông tin của student lên giao diện
  document.getElementById("txtMaSV").value = student.id;
  document.getElementById("txtTenSV").value = student.name;
  document.getElementById("txtEmail").value = student.email;
  document.getElementById("txtPass").value = student.password;
  document.getElementById("txtNgaySinh").value = student.dateOfBirth;
  document.getElementById("khSV").value = student.course;
  document.getElementById("txtDiemToan").value = student.math;
  document.getElementById("txtDiemLy").value = student.physics;
  document.getElementById("txtDiemHoa").value = student.chemistry;

  // disable input mã sinh viên và button thêm sinh viên
  document.getElementById("txtMaSV").disabled = true;
  document.getElementById("btnAdd").disabled = true;
}

function updateStudent() {
  // B1: DOM
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let dateOfBirth = document.getElementById("txtNgaySinh").value;
  let course = document.getElementById("khSV").value;
  let math = +document.getElementById("txtDiemToan").value;
  let physics = +document.getElementById("txtDiemLy").value;
  let chemistry = +document.getElementById("txtDiemHoa").value;

  // B2: Khởi tạo đối tượng student
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

  // B3: Tìm index của phần tử student cần cập nhật
  let index = students.findIndex((value) => {
    return value.id === id
  });
  // Thay thế phần tử thứ index cho object student mới tạo
  students[index] = student;

  // B4: Hiển thị
  display(students)

  // B5: Reset form
  resetForm();
}

// Hàm nhận vào mảng students và hiển thị ra giao diện table
function display(students) {
  let html = students.reduce((result, value) => {
    return (
      result +
      `
        <tr>
          <td>${value.id}</td>
          <td>${value.name}</td>
          <td>${value.email}</td>
          <td>${value.dateOfBirth}</td>
          <td>${value.course}</td>
          <td>${value.calcScore()}</td>
          <td>
            <button
              class="btn btn-warning"
              onclick="selectStudent('${value.id}')"
            >
              Chỉnh sửa
            </button>
            <button
              class="btn btn-danger"
              onclick="removeStudent('${value.id}')"
            >
              Xoá
            </button>
          </td>
        </tr>
      `
    );
  }, "");

  document.getElementById("tbodySinhVien").innerHTML = html;
}

// Hàm reset giá trị của form
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
