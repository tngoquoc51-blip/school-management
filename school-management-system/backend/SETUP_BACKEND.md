# Cài đặt Backend (Laravel)

Thư mục này là phần **overlay** (cấu trúc + code mẫu). Làm theo:

```bash
# 1. Tạo Laravel mới ở thư mục tạm
composer create-project laravel/laravel backend_tmp

# 2. Copy toàn bộ file Laravel vào backend/ (KHÔNG ghi đè app/Core, Modules, routes/api.php)
#    Windows: robocopy backend_tmp backend /E /XC /XN /XO
cd backend
composer require php-open-source-saver/jwt-auth
php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider"
php artisan jwt:secret
cp .env.example .env && php artisan key:generate
```

2. Thêm vào `composer.json`: `"Modules\\": "Modules/"` trong `autoload.psr-4`, và `app/Core/Helpers/helpers.php` trong `autoload.files` (xem `composer-additions.json`), rồi `composer dump-autoload`.
3. Đăng ký provider trong `bootstrap/providers.php`:
   `App\Core\ModuleLoaderServiceProvider::class,`
4. Trong `config/auth.php` thêm guard `api` (driver `jwt`).
5. `php artisan migrate && php artisan serve`

Test: http://localhost:8000/api/health
