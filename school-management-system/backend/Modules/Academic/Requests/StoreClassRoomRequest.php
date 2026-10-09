<?php

namespace Modules\Academic\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClassRoomRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
        ];
    }
}
