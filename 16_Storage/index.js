// Lấy
let msg = localStorage.getItem("msg");
console.log("msg:", msg);

// Thêm/Cập nhật
localStorage.setItem("username", "dannguyen");

// Xoá
localStorage.removeItem("msg");

// Localstorage chỉ lưu trữ được các kiểu dữ liệu cơ bản như string, number, boolean, null, undefined không lưu được dữ liệu là array/object/function
let user = { id: 1, name: "Alice" };
localStorage.setItem("user", user);

let userStorage = localStorage.getItem("user");
console.log("userStorage:", userStorage);

// Chuyển đổi array/object thành JSON để lưu xuống localStorage
let userJson = JSON.stringify(user);
console.log("userJson:", userJson);
console.log("typeof userJson:", typeof userJson);
localStorage.setItem("userJson", userJson);

// Chuyển đổi JSON thành array/object
let userStorageJson = localStorage.getItem("userJson");
let userObject = JSON.parse(userStorageJson);
console.log("userObject:", userObject);
