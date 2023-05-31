## Môi trường trình duyệt

- Đây là cái nhìn toàn cảnh về những gì chúng ta có khi JavaScript chạy trong trình duyệt web:
  ![Browser environment](https://github.com/danndz/bc52-javascript/assets/45675930/d834a59d-caed-4964-94af-dd67a145574a)

## DOM

- Khi bạn mở ra một trang web trong trình duyệt, nội dung HTML của trang được tải và được dựng (vẽ) trực quan trên màn hình. Để làm việc đó, trình duyệt tạo ra một đối tượng có tên Document Object Model gọi tắt là `DOM`, đối tượng này là mô hình logic biểu diễn cấu trúc của trang HTML.

![DOM](https://github.com/danndz/bc52-javascript/assets/45675930/b9c2a2b0-b85c-4ac4-8e6d-302b44298076)

- Theo DOM, mọi thẻ HTML đều là một đối tượng. Tất cả các đối tượng này đều có thể truy cập được bằng JavaScript và chúng ta có thể sử dụng chúng để sửa đổi trang.
- Tất cả các hoạt động trên DOM bắt đầu với đối tượng `document`. Từ đó, chúng ta có thể truy cập bất kỳ phần tử HTML nào.
- Ví dụ: `document.body` là đối tượng đại diện cho phần tử `<body>`.

  ```js
  document.body.style.backgroundColor = "green"; // Thay đổi background của body thành màu xanh lá
  ```

- Nếu một phần tử có thuộc tính id, chúng ta có thể truy cập nó bằng phương thức `document.getElementById(id)`.

  ```html
  <html>
    <body>
      <div id="container">
        <p>Javascript</p>
      </div>

      <script>
        // lấy phần tử div có id là container
        let containerEl = document.getElementById("container");
      </script>
    </body>
  </html>
  ```

- Thuộc tính `innerHTML` cho phép lấy nội dung bên trong phần tử dưới dạng một chuỗi.

  ```html
  <html>
    <body>
      <h1 id="title">DOM</h1>

      <script>
        // lấy phần tử h1 có id là title
        let titleEl = document.getElementById("title");
        // Lấy ra nôi dung
        console.log(titleEl.innerHTML); // DOM
        // Thay đổi nội dung
        titleEl.innerHTML = "Javascript DOM";
      </script>
    </body>
  </html>
  ```

- Thuộc tính `style` cho phép thêm hoặc thay đổi các inline style của phần tử.

  ```html
  <html>
    <body>
      <h1 id="title">DOM</h1>

      <script>
        // lấy phần tử h1 có id là title
        let titleEl = document.getElementById("title");
        // Thay đổi inline style
        titleEl.style.color = "red";
        titleEl.style.fontSize = "30px";
      </script>
    </body>
  </html>
  ```

- Thuộc tính `classList` cho phép thay đổi các class của phần tử.

  ```html
  <html>
    <body>
      <h1 id="title">DOM</h1>

      <script>
        // lấy phần tử h1 có id là title
        let titleEl = document.getElementById("title");
        // Thêm class
        titleEl.classList.add("text-primary", "text-center");
        // Xóa class
        titleEl.classList.remove("text-center");
        // Kiểm tra nếu có class thì xóa, không có thì thêm
        titleEl.classList.toggle("text-center");
      </script>
    </body>
  </html>
  ```

- Lấy và thay đổi giá trị thuộc tính của phần tử.

  - Cú pháp: `document.getElementById(id).attribute = "new value"`. Với `attribute` là tên thuộc tính cần thay đổi.

  - Ví dụ: lấy và thay đổi giá trị thuộc tính value của phần tử `<input>`

    ```js
    // Lấy thẻ input có id là name
    let inputEl = document.getElementById("name");
    // Lấy giá trị của thẻ input
    console.log(inputEl.value); // cybersoft
    // Thay đổi giá trị của thẻ input
    inputEl.value = "cybersoft academy";
    ```

  - Ví dụ: thay đổi giá trị thuộc tính src của phần tử `<img>`:

    ```js
    document.getElementById("my-image").src = "https://picsum.photos/200/300";
    ```

  - Ví dụ: thay đổi giá trị thuộc tính disabled của phần tử `<button>`
    ```js
    document.getElementById("my-button").disabled = true;
    ```

- Thêm các phần tử

  - Cú pháp: `document.createElement(tagName)`. Với `tagName` là tên thẻ HTML cần tạo.
  - Cú pháp: `document.getElementById(id).appendChild(node)`. Với `node` là thẻ HTML hoặc nội dung cần thêm.

  - Ví dụ: tạo thẻ `<p>` và thêm vào phần tử `<body>`

    ```js
    // Tạo thẻ p
    let pEl = document.createElement("p");
    // Thêm nội dung cho thẻ p
    pEl.innerHTML = "Javascript DOM";
    // Thêm thẻ p vào phần tử body
    document.body.appendChild(pEl);
    ```
