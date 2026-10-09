<?php

if (! function_exists('paginate_limit')) {
    function paginate_limit(int $default = 15): int
    {
        return min((int) request('per_page', $default), 100);
    }
}
