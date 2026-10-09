<?php

namespace Modules\Finance\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TuitionFeeResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'created_at' => $this->created_at,
        ];
    }
}
