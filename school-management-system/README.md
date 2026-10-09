# School Management System

Hệ thống quản lý trường học — Laravel (MVC + Modular) + Next.js.

## Cấu trúc
- `backend/` — API Laravel, 12 module: Auth, User, Student, Teacher, Academic, Attendance, Exam, Finance, Library, Notification, Report, System
- `frontend/` — Next.js, giao diện theo vai trò: admin / teacher / student
- `docs/`, `docker/`

## Chạy nhanh
1. Backend: xem `backend/SETUP_BACKEND.md`
2. Frontend: `cd frontend && npm install && npm run dev` → http://localhost:3000
3. Hoặc dùng Docker: `docker compose up --build`

## Mở bằng IntelliJ IDEA
`File > Open` → chọn thư mục `school-management-system`. Cần plugin **PHP** và **Node.js** (Ultimate) hoặc dùng Terminal tích hợp nếu là Community.
