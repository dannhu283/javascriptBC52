## Data types

- Các kiểu dữ liệu cơ bản trong javascript: number, string, boolean, null, undefined

### Number

- Dùng để lưu trữ các giá trị số, bao gồm cả số thực và số nguyên. Ví dụ: `123`, `45.6`
- JavaScript hỗ trợ một loạt các toán tử cho kiểu Number:

  - Cộng `+`
  - Trừ `-`
  - Nhân `*`
  - Chia `/`
  - Chia lấy phần dư `%`: được sử dụng để lấy phần dư của phép chia của hai số. Ví dụ: kết quả `10 % 3` là `1`
  - Luỹ thừa `**`: được sử dụng để lấy lũy thừa của một số. Ví dụ: kết quả `5 ** 2` là `25`
  - Tăng `++`: được sử dụng để tăng giá trị của một số lên 1. Ví dụ: nếu x = 5 thì sau khi thực hiện x++, giá trị của x sẽ là 6.
  - Giảm `--`: được sử dụng để giảm giá trị của một số đi 1. Ví dụ: nếu x = 5 thì sau khi thực hiện x--, giá trị của x sẽ là 4.

- Đối với toán tử tăng (++) và giảm (--), nó có thể được đặt trước hoặc sau một biến.

  - Khi toán tử được đặt sau biến, nó ở dạng hậu tố (postfix): `a++`
  - Khi toán tử được đặt trước biến, nó ở đạng tiền tố (prefix): `++a`
  - Cả hai câu lệnh này đều làm một việc giống nhau: tăng giá trị biến a lên 1. Điểm khác biệt là dạng tiền tố trả về giá trị mới trong khi dạng hậu tố trả về giá trị cũ (trước khi tăng/giảm).
  - Dạng tiền tố `++a` tăng a và trả về giá trị mới. Vì vậy, cả a và b đều bằng 2
    ```js
    let a = 1;
    let b = ++a;
    ```
  - Dạng hậu tố `a++` cũng tăng a nhưng trả về giá trị cũ (trước khi tăng). Vì vậy, a bằng 2 nhưng b vẫn bằng 1.
    ```js
    let a = 1;
    let b = a++;
    ```

- Number có một số giá trị đặc biệt như:

  1. Infinity: đại diện cho một số lớn hơn bất kỳ số nào khác. Ví dụ: Kết quả của phép chia `1 / 0` là `Infinity`
  2. -Infinity: đại diện cho một số nhỏ hơn bất kỳ số nào khác
  3. NaN: đại diện cho một lỗi tính toán. Ví dụ: `"Hai mươi" / 2`

- Đối tượng `Math` trong Javascript cung cấp các phương thức làm việc với toán học
  - Math.pow(x, y): Trả về giá trị của x mũ y.
  - Math.sqrt(x): Trả về căn bậc hai của x.
  - Math.abs(x): Trả về giá trị tuyệt đối của x.
  - Math.ceil(x): Trả về số nguyên nhỏ nhất lớn hơn hoặc bằng x (Làm tròn lên).
  - Math.floor(x): Trả về số nguyên lớn nhất nhỏ hơn hoặc bằng x (Làm tròn xuống).
  - Math.round(x): Trả về x làm tròn tới số nguyên gần nhất.
  - Math.max(a, b, c, ...): Trả về số lớn nhất trong danh sách số đã cho.
  - Math.min(a, b, c, ...): Trả về số nhỏ nhất trong danh sách số đã cho.

### String

- Dùng để lưu trữ giá trị là một chuỗi các ký tự.
- Một chuỗi trong JavaScript phải được bao quanh bởi dấu ngoặc kép `"Hello"`, ngoặc đơn `'Hello'` hoặc dấu backtick `` `Hello` ``
- Chuỗi có thể được nối lại với nhau bằng cách sử dụng toán tử `+`. Ví dụ:
  ```js
  let name;
  ```
- Tạo chuỗi bằng dấu backtick cho phép chèn biểu thức, biến, và tạo chuỗi nhiều dòng một cách dễ dàng. Ví dụ:

  ```js
  let name = "World";
  let message = `Hello, ${name}!`; // "Hello, World!"

  let content = `
    Take me to your heart, take me to your soul
    Give me your hand and hold me
    Show me what love is, be my guiding star
    It's easy, take me to your heart
  `;
  ```

### Boolean

- Kiểu dữ liệu chỉ có hai giá trị: true (đúng) và false (sai).
- Bạn có thể khởi tạo một biến boolean bằng cách gán cho nó một giá trị true hoặc false. Ví dụ: `let isActive = true`.

### Null và Undefined

- Trong JavaScript, `null` và `undefined` đều là kiểu dữ liệu đặc biệt dùng để biểu diễn sự vắng mặt của giá trị. Tuy nhiên, có một số khác biệt giữa chúng:
  - null: thường được sử dụng để biểu thị một giá trị không tồn tại hoặc không xác định một cách cố ý.
  ```js
  let data = null;
  ```
  - undefined: Khi một biến được khai báo nhưng chưa được gán giá trị, giá trị mặc định của nó là undefined.
  ```js
  let data;
  ```
