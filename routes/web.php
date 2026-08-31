<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
});

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
});

Route::get('/projects', function () {
    return Inertia::render('Projects');
});

Route::get('/services', function () {
    return Inertia::render('Services');
});