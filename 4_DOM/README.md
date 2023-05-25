## Môi trường trình duyệt

- Đây là cái nhìn toàn cảnh về những gì chúng ta có khi JavaScript chạy trong trình duyệt web:
  ![Browser environment](https://github.com/danndz/bc52-javascript/assets/45675930/d834a59d-caed-4964-94af-dd67a145574a)

## DOM

- Khi bạn mở ra một trang web trong trình duyệt, nội dung HTML của trang được tải và được dựng (vẽ) trực quan trên màn hình. Để làm việc đó, trình duyệt tạo ra một đối tượng có tên Document Object Model gọi tắt là `DOM`, đối tượng này là mô hình logic biểu diễn cấu trúc của trang HTML.

![DOM](https://github.com/danndz/bc52-javascript/assets/45675930/b9c2a2b0-b85c-4ac4-8e6d-302b44298076)

- Theo DOM, mọi thẻ HTML đều là một đối tượng. Tất cả các đối tượng này đều có thể truy cập được bằng JavaScript và chúng ta có thể sử dụng chúng để sửa đổi trang.
- Tất cả các hoạt động trên DOM bắt đầu với đối tượng `document`. Từ đó, chúng ta có thể truy cập bất kỳ thẻ nào.
- Ví dụ: `document.body` là đối tượng đại diện cho thẻ `<body>`.

  ```js
  document.body.style.backgroundColor = "green"; // Thay đổi background của body thành màu xanh lá
  ```

- Nếu một thẻ có thuộc tính id, chúng ta có thể lấy thẻ đó bằng phương thức `document.getElementById(id)`.

  ```html
  <html>
    <body>
      <div id="container">
        <p>Javascript</p>
      </div>

      <script>
        // lấy thẻ div có id là container
        let containerEl = document.getElementById("container");
      </script>
    </body>
  </html>
  ```

- Thuộc tính `innerHTML` cho phép lấy nội dung bên trong thẻ dưới dạng một chuỗi.

  ```html
  <html>
    <body>
      <h1 id="title">DOM</h1>

      <script>
        // lấy thẻ h1 có id là title
        let titleEl = document.getElementById("title");
        // Lấy ra nôi dung bên trong thẻ
        console.log(titleEl.innerHTML); // DOM
        // Thay đổi nội dung bên trong thẻ
        titleEl.innerHTML = "Javascript DOM";
      </script>
    </body>
  </html>
  ```

- Thuộc tính `style` cho phép thêm hoặc thay đổi các inline style của thẻ.

  ```html
  <html>
    <body>
      <h1 id="title">DOM</h1>

      <script>
        // lấy thẻ h1 có id là title
        let titleEl = document.getElementById("title");
        // Thay đổi style của thẻ
        titleEl.style.color = "red";
      </script>
    </body>
  </html>
  ```

- Thuộc tính `value` cho phép lấy và thay đổi giá trị của thẻ input.

  ```html
  <html>
    <body>
      <input type="text" value="cybersoft" id="name" />

      <script>
        // Lấy thẻ input có id là name
        let inputEl = document.getElementById("name");
        // Lấy giá trị của thẻ input
        console.log(inputEl.value); // cybersoft
        // Thay đổi giá trị của thẻ input
        inputEl.value = "cybersoft academy";
      </script>
    </body>
  </html>
  ```
