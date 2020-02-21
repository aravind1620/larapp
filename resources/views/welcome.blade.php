@extends('layouts.app', ['class' => 'off-canvas-sidebar', 'activePage' => 'home', 'title' => __('Material Dashboard')])

@section('content')
<div class="container" style="height: auto;">
  <div class="row justify-content-center">
      <div class="col-lg-10 col-md-10">
          <h1 class="text-white text-center">{{ __('Course Management System For Entrance Coaching Institutes') }}</h1>
      </div>
  </div>
    <div class="row justify-content-center">
        <div class="col-lg-10 col-md-10">
            <p class="text-white text-center">{{ __('Advanced Course Management system for NEET, JEE Mains and Advanced  Coaching Institutes') }}</p>
        </div>
    </div>
</div>
@endsection
