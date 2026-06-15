
# Website tuyển dụng việc làm IT

## 1. Giới thiệu dự án

Đây là website tuyển dụng việc làm IT được xây dựng nhằm hỗ trợ kết nối giữa ứng viên và nhà tuyển dụng. Hệ thống cho phép người dùng tìm kiếm việc làm, xem thông tin công ty, xem chi tiết công việc và gửi CV ứng tuyển trực tuyến.

Dự án gồm hai phần chính:

* Frontend: xây dựng giao diện người dùng bằng Next.js, React, TypeScript và Tailwind CSS.
* Backend: xây dựng API bằng Node.js, Express, TypeScript, MongoDB và Mongoose.

Các nhóm người dùng chính trong hệ thống:

* Người dùng: xem trang chủ, tìm kiếm việc làm, xem danh sách công ty, xem chi tiết công ty, xem chi tiết công việc, đăng ký và đăng nhập.
* Ứng viên: quản lý thông tin cá nhân, gửi CV ứng tuyển và xem danh sách CV đã gửi.
* Nhà tuyển dụng: quản lý thông tin công ty, quản lý tin tuyển dụng và quản lý CV ứng tuyển.

## 2. Chức năng chính

### 2.1. Chức năng chung

* Đăng ký tài khoản
* Đăng nhập
* Đăng xuất
* Xem trang chủ
* Tìm kiếm việc làm
* Xem danh sách công ty
* Xem chi tiết công ty
* Xem chi tiết công việc

### 2.2. Chức năng ứng viên

* Cập nhật thông tin cá nhân
* Upload ảnh đại diện
* Gửi CV ứng tuyển
* Xem danh sách CV đã gửi
* Theo dõi trạng thái CV

### 2.3. Chức năng nhà tuyển dụng

* Cập nhật thông tin công ty
* Upload logo công ty
* Thêm tin tuyển dụng
* Xem danh sách tin tuyển dụng
* Sửa tin tuyển dụng
* Xóa tin tuyển dụng
* Xem danh sách CV ứng tuyển
* Xem chi tiết CV
* Cập nhật trạng thái CV
* Xóa CV ứng tuyển

## 3. Công nghệ sử dụng

### 3.1. Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Icons
* FilePond
* JustValidate
* TinyMCE
* Sonner

### 3.2. Backend

* Node.js
* Express
* TypeScript
* MongoDB
* Mongoose
* JSON Web Token
* bcryptjs
* cookie-parser
* cors
* multer
* Cloudinary
* Joi

## 4. Cấu trúc thư mục

```txt
project/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── helpers/
│   ├── interfaces/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── validates/
│   ├── index.ts
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   ├── config/
    │   ├── hooks/
    │   ├── types/
    │   └── middleware.ts
    └── package.json
```

## 5. Yêu cầu cài đặt

Trước khi chạy dự án, cần cài đặt:

* Node.js
* npm
* MongoDB hoặc tài khoản MongoDB Atlas
* Tài khoản Cloudinary để upload ảnh và file
* TinyMCE API key nếu sử dụng trình soạn thảo mô tả công việc

## 6. Hướng dẫn cài đặt và chạy chương trình

### 6.1. Tải source code

Clone project từ repository:

```bash
git clone <link-repository>
cd <ten-thu-muc-project>
```

Hoặc giải nén source code và mở thư mục project bằng Visual Studio Code.

## 7. Cài đặt và chạy backend

### 7.1. Di chuyển vào thư mục backend

```bash
cd backend
```

### 7.2. Cài đặt thư viện

```bash
npm install
```

### 7.3. Tạo file môi trường

Tạo file `.env` trong thư mục `backend`:

```env
DATABASE=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

NODE_ENV=development
```

Lưu ý: không đưa file `.env` lên GitHub vì file này chứa thông tin bảo mật.
### Cấu hình CORS khi chạy chương trình

Để frontend gọi được API backend, cần kiểm tra cấu hình CORS trong file chạy chính của backend, thường là `index.ts` hoặc `app.ts`.

Nếu chạy project ở môi trường local, frontend mặc định chạy tại:

```txt
http://localhost:3000
```

Backend cần cấu hình CORS như sau:

```ts
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
```

Nếu deploy frontend lên Render hoặc một nền tảng khác, cần thay `origin` bằng đúng đường dẫn frontend đã deploy.

Ví dụ frontend được deploy tại:

```txt
https://du-an-web-tuyen-dung-6.onrender.com
```

thì cấu hình CORS trong backend là:

```ts
app.use(cors({
  origin: "https://du-an-web-tuyen-dung-6.onrender.com",
  credentials: true,
}));
```

Lưu ý: đường dẫn trong `origin` không được có dấu `/` ở cuối.

Sai:

```ts
origin: "https://du-an-web-tuyen-dung-6.onrender.com/"
```

Đúng:

```ts
origin: "https://du-an-web-tuyen-dung-6.onrender.com"
```

Nếu muốn backend cho phép cả local và Render, có thể cấu hình như sau:

```ts
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://du-an-web-tuyen-dung-6.onrender.com"
  ],
  credentials: true,
}));
```

Ngoài ra, frontend cần cấu hình biến môi trường trỏ tới backend.

Khi chạy local, file `.env.local` trong thư mục `frontend`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Khi deploy lên Render, cần sửa biến môi trường frontend thành URL backend đã deploy, ví dụ:

```env
NEXT_PUBLIC_API_URL=https://link-backend.onrender.com
```

Sau khi sửa CORS hoặc biến môi trường, cần chạy lại backend/frontend hoặc redeploy lại service trên Render để cấu hình mới có hiệu lực.


### 7.4. Chạy backend

```bash
npm start
```

Backend chạy tại địa chỉ:

```txt
http://localhost:4000
```

## 8. Cài đặt và chạy frontend

Mở terminal mới, sau đó di chuyển vào thư mục frontend:

```bash
cd frontend
```

### 8.1. Cài đặt thư viện

```bash
npm install
```

### 8.2. Tạo file môi trường

Tạo file `.env.local` trong thư mục `frontend`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_API_TINYMCE=<your_tinymce_api_key>
```

### 8.3. Chạy frontend

```bash
npm run dev
```

Frontend chạy tại địa chỉ:

```txt
http://localhost:3000
```

## 9. Thứ tự chạy chương trình

Cần chạy backend trước, sau đó chạy frontend.

Terminal 1:

```bash
cd backend
npm start
```

Terminal 2:

```bash
cd frontend
npm run dev
```

Sau đó mở trình duyệt và truy cập:

```txt
http://localhost:3000
```

## 10. Một số API chính

### 10.1. API người dùng

```txt
POST   /user/register
POST   /user/login
PATCH  /user/profile
GET    /user/cv/list
```

### 10.2. API xác thực

```txt
GET    /auth/check
GET    /auth/logout
```

### 10.3. API công ty

```txt
POST   /company/register
POST   /company/login
PATCH  /company/profile
GET    /company/list
GET    /company/detail/:id
```

### 10.4. API tin tuyển dụng

```txt
POST    /company/job/create
GET     /company/job/list
GET     /company/job/edit/:id
PATCH   /company/job/edit/:id
DELETE  /company/job/delete/:id
GET     /job/detail/:id
```

### 10.5. API CV ứng tuyển

```txt
POST    /job/apply
GET     /company/cv/list
GET     /company/cv/detail/:id
PATCH   /company/cv/change-status/:id
DELETE  /company/cv/delete/:id
```

### 10.6. API tìm kiếm và dữ liệu phụ

```txt
GET     /search
GET     /city/list
POST    /upload/image
```

## 11. Tài khoản và dữ liệu mẫu

Sau khi chạy chương trình, có thể đăng ký tài khoản trực tiếp trên giao diện:

* Đăng ký ứng viên tại trang đăng ký ứng viên.
* Đăng ký nhà tuyển dụng tại trang đăng ký công ty.
* Nhà tuyển dụng cần cập nhật thông tin công ty trước khi đăng tin tuyển dụng.

## 12. Lưu ý khi chạy project

* Frontend chạy ở cổng 3000.
* Backend chạy ở cổng 4000.
* Backend đã cấu hình CORS cho frontend tại `http://localhost:3000`.
* Nếu frontend không gọi được API, cần kiểm tra biến `NEXT_PUBLIC_API_URL`.
* Nếu backend không kết nối được database, cần kiểm tra biến `DATABASE` trong file `.env`.
* Nếu upload ảnh hoặc CV lỗi, cần kiểm tra cấu hình Cloudinary.
* Không nên commit thư mục `node_modules`, `.next` và file `.env` lên repository.

## 13. Tác giả

Sinh viên thực hiện: Đỗ Bình Minh

Đề tài: Xây dựng website tuyển dụng việc làm
