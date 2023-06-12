function calculator() {
  let radioGrabCar = document.getElementById("grabCar");
  let radioGrabSUV = document.getElementById("GrabSUV");
  let radioGrabBlack = document.getElementById("GrabBlack");
  // để kiểm tra radio nào đang được chọn,ta dùng thuộc tính checked
  // console.log("Grab Car", radioGrabCar.checked);
  // console.log("Grab SUV", radioGrabSUV.checked);
  // console.log("Grab Black", radioGrabBlack.checked);

  let km = +document.getElementById("input-km").value;
  let time = +document.getElementById("input-time").value;
  if (radioGrabCar.checked) {
    let price = pay(km, time, 8000, 7500, 7000, 2000);
    display(price);
  } else if (radioGrabSUV.checked) {
    let price = pay(km, time, 9000, 8500, 8000, 3000);
    display(price);
  } else if (radioGrabBlack.checked) {
    let price = pay(km, time, 10000, 9500, 9000, 3500);
    display(price);
  } else {
    alert("vui lòng chọn loại xe");
  }
}

function pay(km, time, price1, pric2, price3, price4) {
  let price = 0;

  if (km <= 1) {
    price = price1;
  } else if (km <= 19) {
    price = 8000 + (km - 1) * pric2;
  } else {
    price = 8000 + 18 * 7500 + (km - 19) * price3;
  }

  // phải để += để cộng dồng vào giá trị price trước đó
  if (time > 0) {
    price += Math.ceil(time / 3) * price4;
  }

  return price;
}

// hiển thị giá tiền ra giao diện
function display(price) {
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = ` ${price}`;
}
