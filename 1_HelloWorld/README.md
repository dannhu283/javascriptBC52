## Giới thiệu Javascript

- JavaScript ban đầu được tạo ra để “làm cho các trang web trở nên sống động”.
  ![html-and-css-crash-course-2-638](https://github.com/danndz/bc52-javascript/assets/45675930/9da94c0a-4642-4bee-89a0-ba9277b9aad7)

- Javascript là một ngôn ngữ lập trình thông dịch cho phép bạn triển khai các tính năng phức tạp lên trang web
- Khái niệm cơ bản về NNLT: https://intelligent-soapwort-da0.notion.site/Programming-language-5b14f1a7829b43d1b39c99db8e2251da

## Javascript chạy ở đâu và như thế nào

- Javascript có thể được viết ngay trong HTML của trang web và chạy tự động khi tải trang.
- Ngày nay, JavaScript không chỉ có thể thực thi trên trình duyệt mà còn trên máy chủ hoặc thực tế là trên bất kỳ thiết bị nào có chương trình đặc biệt gọi là `Javascript Engine`.
- Các browser sẽ có những engine khác nhau, ví dụ:
  - V8: Chrome, Opera và Edge.
  - SpiderMonkey: Firefox.

## Javascript engine hoạt động như thế nào

- Javascript engine rất phức tạp, nhưng chúng ta có thể hiểu những bước cơ bản sau:

1. Engine (được nhúng trong trình duyệt) đọc và phân tích cú pháp tập lệnh.
2. Sau đó, nó chuyển đổi (biên dịch) tập lệnh thành mã máy.
3. Và sau đó mã máy được được thực thi.

![javascript-engine-2](https://github.com/danndz/bc52-javascript/assets/45675930/81238ba0-b6be-4461-a690-dbcdd8adbd81)

## Javascript trong trình duyệt có thể làm gì?

- Thêm HTML mới vào trang, thay đổi nội dung hiện có, sửa đổi CSS.
- Phản ứng với hành động của người dùng. VD: nhấp chuột, di chuyển con trỏ, nhấn phím.
- Gửi yêu cầu qua mạng đến các máy chủ, tải xuống và tải lên các tệp,...

## Làm cách nào để bạn thêm JavaScript vào trang web?

- Các chương trình JavaScript có thể được chèn vào hầu hết mọi nơi trong HTML bằng cách sử dụng thẻ <script>.
- Thẻ <script> chứa mã JavaScript được thực thi tự động khi trình duyệt xử lý thẻ đó.

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Before the script...</p>

    <script>
      alert("Hello, world!");
    </script>

    <p>...After the script.</p>
  </body>
</html>
```

- Tuy nhiên nếu có nhiều mã JavaScript, chúng ta có thể đặt nó vào một tệp riêng bằng thuộc tính `src` của thẻ <script>

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="/path/script.js"></script>
  </body>
</html>
```

## Best practice
- Nên tạo tệp Javascript riêng và đính kèm vào HTML
- Nên đặt thẻ script ở dưới cùng của thẻ body (để tránh trường hợp các đoạn code bị lỗi thì giao diện đã được hiển thị ra)
