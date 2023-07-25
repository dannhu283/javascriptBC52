export function sum(...numbers) {
  return numbers.reduce((reusult, value) => {
    return reusult + value;
  }, 0);
}

// nếu như file main đã có sẵn hàm sum mà ta import thêm 1 hàm sum nữa thì ta có thể sử dụng cú pháp import { sum as mathSum } from "./math.js"; để đôi tên thì vẫn có thể sử dụng bt
