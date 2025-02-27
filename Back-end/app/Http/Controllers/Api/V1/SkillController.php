<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSkillRequest;
use App\Http\Resources\V1\SkillCollection;
use App\Models\Skill;
use Illuminate\Http\Request;
use App\Http\Resources\V1\SkillResource;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new SkillCollection(Skill::get()->sortDesc());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSkillRequest $request)
    {
        Skill::create($request->validated());
        return response()->json('Skill Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Skill $skill)
    {
        return new SkillResource($skill);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreSkillRequest $request, Skill $skill)
    {
        $skill->update($request->validated());
        return response()->json('Skill Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skill $skill)
    {
        $skill->delete();
        return response()->json('Successfully Deleted');
    }
}
