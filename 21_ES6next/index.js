//1.Optional chaining (ddùng dấu chấm hỏi để kiểm tra giá trị có tồn tại hay không,có thể sử dụng nhiều dấu ? nếu như muốn kiểm tra nhiều giá trị )
const h1El = document.getElementById("title");

// const title = h1El.innerHTML; //lỗi vì h1El là null

// //cách 1
// let title = "";
// if (h1El) {
//   title = h1El.innerHTML;
// }

// // cách 2 : dùng toán tử &&(vì toán tử và sẽ lấy giá trị falsy value đầu tiên)
// let title = h1El && h1El.innerHTML;
// console.log(title);

//cách 3:dùng optional chaining

let title = h1El?.innerHTML;
console.log(title);

const user = {
  name: "Alice",
  pets: {
    cat: {
      name: "moon",
    },
  },
};
//truy cập thuộc tính của ob
console.log(user.pets.dog?.name);
console.log(user.pets.cat?.name);

//truy cập trong mảng
console.log(user.languages?.[0]);

//truy cập phương thức
console.log(user.methodNotExisting?.());

//2.nullish coalescing(??) (lấy giá trị trusthy value đầu tiên ngoại trừ null và undefined)

let score = 0 ?? "NA";
console.log(score);

let str = null ?? "empty string";
console.log(str);

//3.try catch

// ví dụ bắt lỗi try catch
try {
  notExistingFunction();
  console.log("Try catch");
} catch (error) {
  console.log("error name:", error.name);
  console.log("error message:", error.message);
  console.log("error stack:", error.stack);
}
//ví dụ :xử lí ném ra lỗi
try {
  const user = JSON.parse(localStorage.getItem("user"));
  // kiểm tra nếu không có thông tin sẽ dừng xử lí thông tin user và ném ra lỗi
  if (!user) {
    throw Error("user not found");
  }
  console.log("user:", user);
} catch (error) {
  console.log(error);
  //muốn log từng thuộc tính cụ thể
  console.log("error name:", error.name);
  console.log("error message:", error.message);
  console.log("error stack:", error.stack);
}

console.log("Running");

//4. async await
function apiGetProducts(searchValue) {
  return axios({
    url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/products",
    method: "GET",
    params: {
      name: searchValue || undefined,
    },
  });
}

function apiCreateProduct(product) {
  return axios({
    url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/products",
    method: "POST",
    data: product,
  });
}

function createProduct() {
  let product = {
    name: "Samsung A32",
    price: 4999999,
    image:
      "https://stuff.co.za/wp-content/uploads/2021/04/20210421_112826-scaled.jpg",
    type: "phone",
  };

  apiCreateProduct(product)
    .then((response) => {
      return apiGetProducts();
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function createProductAsync() {
  let product = {
    name: "Samsung A32",
    price: 4999999,
    image:
      "https://stuff.co.za/wp-content/uploads/2021/04/20210421_112826-scaled.jpg",
    type: "phone",
  };

  try {
    await apiCreateProduct(product);
    const response = await apiGetProducts();
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
createProductAsync();
