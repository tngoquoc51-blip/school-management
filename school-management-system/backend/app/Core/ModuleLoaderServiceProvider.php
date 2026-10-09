<?php

namespace App\Core;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

/**
 * Tự động nạp routes + migrations của mọi thư mục trong Modules/.
 */
class ModuleLoaderServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        require_once __DIR__ . '/Helpers/helpers.php';
    }

    public function boot(): void
    {
        $modulesPath = base_path('Modules');
        if (! File::isDirectory($modulesPath)) {
            return;
        }

        foreach (File::directories($modulesPath) as $module) {
            $name = strtolower(basename($module));

            $routes = $module . '/Routes/api.php';
            if (File::exists($routes)) {
                Route::prefix('api/v1/' . $name)->middleware('api')->group($routes);
            }

            $migrations = $module . '/Database/Migrations';
            if (File::isDirectory($migrations)) {
                $this->loadMigrationsFrom($migrations);
            }
        }
    }
}
