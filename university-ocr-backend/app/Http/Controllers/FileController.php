<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use App\Models\File;
use App\Models\Student;
use thiagoalessio\TesseractOCR\TesseractOCR;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
  public function index()
{
    $user = Auth::user();

  

    if ($user->role === 'Super Administrator') {
        $files = File::all();
    }
    elseif ($user->role === 'Department Administrator') {

    $files = File::where(
        'destination_department',
        $user->department
    )->get();
}

  elseif ($user->role === 'student') {

    \Log::info('Authenticated user', [
        'user_id' => $user->id,
        'email' => $user->email,
    ]);

    \Log::info('Student relation', [
        'student' => $user->student,
    ]);

    $student = Student::where('email', $user->email)->first();

    $files = $student
        ? File::where('student_id', $student->student_id)->get()
        : collect();
}

    else {
        $files = collect();
    }

    return response()->json(
    $files->map(function ($file) {
        return [
            'id' => $file->id,
            'reference' => 'REF-' . str_pad($file->id, 6, '0', STR_PAD_LEFT),
            'title' => $file->title,
            'type' => pathinfo($file->file_path, PATHINFO_EXTENSION),
            'department' => $file->destination_department,
            'submittedBy' => optional($file->student)->name ?? $file->student_id,
            'status' => strtolower($file->status),
            'updatedAt' => $file->updated_at,
        ];
    })
);
}

   public function updateStatus(Request $request, $fileId)
{
    $request->validate([
        'status' => ['required', Rule::in(['approved', 'rejected', 'in_review'])],
        'reason' => 'nullable|string',
    ]);

    $file = File::findOrFail($fileId);
$file->status = match($request->status){

    'approved' => 'Approved',

    'rejected' => 'Rejected',

    'in_review' => 'In_review',

    default => $file->status

};



if($request->status === 'rejected'){

    $file->rejection_reason = $request->reason;

}


$file->save();


    return response()->json([
        'message' => 'Document status updated successfully.',
        'file' => $file,
    ]);
}

public function show($id)
{
    $file = File::findOrFail($id);

    return response()->json([
        'id' => $file->id,
        'title' => $file->title,
        'department' => $file->destination_department,
        'status' => $file->status,
        'content' => $file->content,
        'file_path' => $file->file_path,
        'created_at' => $file->created_at,
        'rejection_reason' => $file->rejection_reason,
        'description' => $file->description, 
    ]);
}

 public function store(Request $request)
{
    $request->validate([
        'student_id' => 'required|exists:students,student_id',
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
        'destination_department' => 'required|string',
        'file' => 'required|file|mimes:pdf,jpg,jpeg,png|max:20480',
    ]);

    $request->validate([
    'notes' => 'nullable|string',
]);

    // Find the student using the student_id sent from the frontend
    $student = Student::where('student_id', $request->student_id)->first();

    if (!$student) {
        return response()->json([
            'message' => 'Student not found.'
        ], 404);
    }

    // Store uploaded file
$path = $request->file('file')->store('files', 'public');

$fullPath = storage_path('app/public/' . $path);

\Log::info('OCR File Path', [
    'path' => $fullPath,
    'exists' => file_exists($fullPath),
]);

try {
    $text = (new TesseractOCR($fullPath))
        ->lang('eng')
        ->run();

    \Log::info('OCR Extracted Text', [
        'text' => $text,
    ]);
} catch (\Exception $e) {
    \Log::error('OCR Failed', [
        'message' => $e->getMessage(),
    ]);

    $text = '';
}

    // Save record
    $file = File::create([
        'student_id' => $student->student_id,
        'title' => $request->title,
        'description' => $request->description,
        'destination_department' => $request->destination_department,
        'file_path' => $path,
        'content' => $text,
        'status' => 'Pending',
    ]);

    return response()->json([
        'message' => 'File uploaded successfully.',
        'file' => $file,
    ], 201);
}

public function search(Request $request)
{
    $q = $request->query('q');

    if (!$q) {
        return response()->json([]);
    }

    $user = Auth::user();

    $query = File::query();

    // OPTIONAL: reuse same role logic as index
    if ($user->role === 'student') {
        $student = Student::where('email', $user->email)->first();

        if ($student) {
            $query->where('student_id', $student->student_id);
        } else {
            return response()->json([]);
        }
    }

    $files = $query->where(function ($sub) use ($q) {
        $sub->where('title', 'like', "%$q%")
            ->orWhere('description', 'like', "%$q%");
    })->get();

    return response()->json($files);
}
    public function forward(Request $request, $fileId)
    {
        $user = Auth::user();
        $request->validate([
            'department' => 'required|string',
            'note' => 'nullable|string',
        ]);

        return response()->json([]);
    }
}