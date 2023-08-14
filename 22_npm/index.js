// ban đầu chạy lệnh npm init
//để gắn thư viện chạy lệnh npm i tên thư viện
// để bỏ qua folder node_modules khi đẩy code lên github thì tạo file .gitignore
import axios from "axios";

async function getUser() {
  const response = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
  });
  console.log(response.data);
}
getUser();
console.log("hello");
