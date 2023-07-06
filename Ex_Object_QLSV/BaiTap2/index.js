// Danh sách sinh viên
let students = [];

// Biến kiểm tra xem form đã được submit hay chưa
let isSubmitted = false;

// Gọi hàm init để khởi tạo danh sách sinh viên (nếu có)
init();

function init() {
  students = JSON.parse(localStorage.getItem("students")) || [];
  students = students.map((value) => {
    return new Student(
      value.id,
      value.name,
      value.email,
      value.password,
      value.dateOfBirth,
      value.course,
      value.math,
      value.physics,
      value.chemistry
    );
  });
  display(students);
}

function addStudent() {
  // B1 + B2: Gọi tới hàm validate để kiểm tra form và tạo đối tượng student
  isSubmitted = true;
  let student = validate();
  if (!student) {
    return;
  }

  // B3: Thêm đối tượng student vừa tạo vào danh sách
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

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
  localStorage.setItem("students", JSON.stringify(students));

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
  isSubmitted = true;
  let student = validate();
  if (!student) {
    return;
  }

  // B3: Tìm index của phần tử student cần cập nhật
  let index = students.findIndex((value) => {
    return value.id === student.id;
  });
  // Thay thế phần tử thứ index cho object student mới tạo
  students[index] = student;
  localStorage.setItem("students", JSON.stringify(students));

  // B4: Hiển thị
  display(students);

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
  isSubmitted = false;

  document.getElementById("txtMaSV").value = "";
  document.getElementById("txtTenSV").value = "";
  document.getElementById("txtEmail").value = "";
  document.getElementById("txtPass").value = "";
  document.getElementById("txtNgaySinh").value = "";
  document.getElementById("khSV").value = "";
  document.getElementById("txtDiemToan").value = "";
  document.getElementById("txtDiemLy").value = "";
  document.getElementById("txtDiemHoa").value = "";

  document.getElementById("spanMaSV").innerHTML = "";
  document.getElementById("spanTenSV").innerHTML = "";
  document.getElementById("spanEmailSV").innerHTML = "";
  document.getElementById("spanMatKhau").innerHTML = "";
  document.getElementById("spanNgaySinh").innerHTML = "";
  document.getElementById("spanKhoaHoc").innerHTML = "";
  document.getElementById("spanToan").innerHTML = "";
  document.getElementById("spanLy").innerHTML = "";
  document.getElementById("spanHoa").innerHTML = "";

  document.getElementById("txtMaSV").disabled = false;
  document.getElementById("btnAdd").disabled = false;
}

// Hàm kiểm tra giá trị có rỗng hay không
function isRequired(value) {
  if (!value.trim()) {
    // Chuỗi rỗng
    return false;
  }
  return true;
}

// Hàm kiểm tra điểm có hợp lệ hay không
function isScore(value) {
  if (isNaN(value)) {
    return false;
  }
  if (value < 0 || value > 10) {
    return false;
  }
  return true;
}

// Hàm kiểm tra mật khẩu: ít nhất 8 kí tự, có ít nhất 1 chử hoa, 1 chử thường, 1 số, 1 kí tự đặc biệt
function isPassword(value) {
  let regex =
    /^(?=.*[A-Z])(?=.*[!&%\/()=\?\^\*\+\]\[#><;:,\._-|@])(?=.*[0-9])(?=.*[a-z]).{8,40}$/;

  return regex.test(value);
}

// Hàm kiểm tra email
function isEmail(value) {
  let regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  return regex.test(value);
}

// Hàm kiểm tra thông tin của student có hợp lệ hay không
function validate() {
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPass").value;
  let dateOfBirth = document.getElementById("txtNgaySinh").value;
  let course = document.getElementById("khSV").value;
  let math = document.getElementById("txtDiemToan").value;
  let physics = document.getElementById("txtDiemLy").value;
  let chemistry = document.getElementById("txtDiemHoa").value;

  let isValid = true;

  if (!isRequired(id)) {
    // Không hợp lệ
    isValid = false;
    document.getElementById("spanMaSV").innerHTML = "Mã không được để trống";
  }

  if (!isRequired(name)) {
    isValid = false;
    document.getElementById("spanTenSV").innerHTML = "Tên không được để trống";
  }

  let emailSpan = document.getElementById("spanEmailSV");
  if (!isRequired(email)) {
    isValid = false;
    emailSpan.innerHTML = "Email không được để trống";
  } else if (!isEmail(email)) {
    isValid = false;
    emailSpan.innerHTML = "Email không hợp lệ";
  }

  let pwSpan = document.getElementById("spanMatKhau");
  if (!isRequired(password)) {
    isValid = false;
    pwSpan.innerHTML = "Mật khẩu không được để trống";
  } else if (!isPassword(password)) {
    isValid = false;
    pwSpan.innerHTML = "Mật khẩu không hợp lệ";
  }

  if (!isRequired(dateOfBirth)) {
    isValid = false;
    document.getElementById("spanNgaySinh").innerHTML =
      "Ngày sinh không được để trống";
  }

  if (!isRequired(course)) {
    isValid = false;
    document.getElementById("spanKhoaHoc").innerHTML =
      "Khoá học không được để trống";
  }

  let mathSpan = document.getElementById("spanToan");
  if (!isRequired(math)) {
    isValid = false;
    mathSpan.innerHTML = "Điểm toán không được để trống";
  } else if (!isScore(+math)) {
    isValid = false;
    mathSpan.innerHTML = "Điểm toán không hợp lệ";
  }

  let physicsSpan = document.getElementById("spanLy");
  if (!isRequired(physics)) {
    isValid = false;
    physicsSpan.innerHTML = "Điểm lý không được để trống";
  } else if (!isScore(+physics)) {
    isValid = false;
    physicsSpan.innerHTML = "Điểm lý không hợp lệ";
  }

  let chemistrySpan = document.getElementById("spanHoa");
  if (!isRequired(chemistry)) {
    isValid = false;
    chemistrySpan.innerHTML = "Điểm hoá không được để trống";
  } else if (!isScore(chemistry)) {
    isValid = false;
    chemistrySpan.innerHTML = "Điểm hoá không hợp lệ";
  }

  if (isValid) {
    // Form hợp lệ, tạo ra trả về đối tượng student
    let student = new Student(
      id,
      name,
      email,
      password,
      dateOfBirth,
      course,
      +math,
      +physics,
      +chemistry
    );

    return student;
  }

  // Form không hợp lệ => Không tạo đối tượng student
  return undefined;
}

document.getElementById("txtMaSV").oninput = (event) => {
  if (!isSubmitted) return;

  // Tất cả sự kiện trong Javascript đều nhận được đối tượng event
  // event.target: phần tử html phát sinh sự kiện
  let idSpan = document.getElementById("spanMaSV");
  if (isRequired(event.target.value)) {
    idSpan.innerHTML = "";
  } else {
    idSpan.innerHTML = "Mã không được để trống";
  }
};
