<?php

namespace Tests\Feature;

use Tests\TestCase;

class HealthTest extends TestCase
{
    public function test_health_endpoint(): void
    {
        $this->getJson('/api/health')->assertOk()->assertJson(['status' => 'ok']);
    }
}
