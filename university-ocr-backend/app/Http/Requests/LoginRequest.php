<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // This is a public endpoint, so we can return true.
        // Authorization is handled by the login logic itself.
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
{
    if ($this->role === 'Student') {
        return [
            'email' => 'required|email',
            'student_id' => 'required|string',
            'role' => 'required'
        ];
    }

    return [
        'email' => 'required|email',
        'password' => 'required|string',
        'role' => 'required'
    ];
}
}