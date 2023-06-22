function display() {
  // B1: Truy cập các phần tử input và lấy giá trị
  let id = document.getElementById("txtMaSV").value;
  let name = document.getElementById("txtTenSV").value;
  let type = document.getElementById("loaiSV").value;
  let math = +document.getElementById("txtDiemToan").value;
  let literature = +document.getElementById("txtDiemVan").value;

  // B2: Tạo đối tượng sinh viên
  let student = {
    // Thuộc tính
    id: id,
    name: name,
    type: type,
    math: math,
    literature: literature,
    // Phương thức
    calcScore() {
      return (this.math + this.literature) / 2;
    },
    getRank() {
      let score = this.calcScore();
      if (score >= 8.5) {
        return "Giỏi";
      }
      if (score >= 6.5) {
        return "Khá";
      }
      if (score >= 5) {
        return "Trung Bình Khá";
      }
      if (score >= 3.5) {
        return "Trung Bình";
      }
      return "Yếu";
    },
  };

  // B3: Hiển thị
  document.getElementById("spanTenSV").innerHTML = student.name;
  document.getElementById("spanMaSV").innerHTML = student.id;
  document.getElementById("spanLoaiSV").innerHTML = student.type;
  document.getElementById("spanDTB").innerHTML = student.calcScore();
  document.getElementById("spanXepLoai").innerHTML = student.getRank();
}
