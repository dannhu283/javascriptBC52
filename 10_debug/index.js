let titleEl = document.getElementById("title");
// titleEl.innerHTML = "hello";
//cannot set properties of null (setting innerHTML )
if (titleEl) {
  titleEl.innerHTML = "hello";
}

//data is not defined(do chưa khởi tạo biến data nên ko log được dẫn đến lỗi )
//console.log(data);

// kiểm tra giá trị của các biến bằng hàm cosole.log()
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 5));

//debug bằng breakpoint
function greeting(name) {
  let text = `hello ${name}`;
  say(text);
}
function say(text) {
  document.write("**" + text + "**");
}
greeting("bob");
//debug bằng lệnh debugger
