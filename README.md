# Apex Pod Innovations

A web application built with Laravel, React, Inertia.js, Vite, and Tailwind CSS.

## Tech Stack

- **Backend:** Laravel 13
- **Frontend:** React 19
- **SPA Framework:** Inertia.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Database:** SQLite
- **Package Manager:** npm
- **PHP:** 8.5+
- **Node.js:** 20+

## Requirements

Before running the project, make sure the following are installed:

- PHP 8.5 or higher
- Composer
- Node.js 20 or higher
- npm
- Git

Check your installed versions:

    php -v
    composer -V
    node -v
    npm -v
    git --version

## Installation

### 1. Clone the Repository

    git clone <REPOSITORY-URL>
    cd Apex-Pod-Innovations

### 2. Install Dependencies

Install the Laravel/PHP dependencies:

    composer install

Install the React/frontend dependencies:

    npm install

### 3. Configure Environment

Create the environment file:

Windows PowerShell:

    Copy-Item .env.example .env

macOS/Linux:

    cp .env.example .env

Generate the Laravel application key:

    php artisan key:generate

### 4. Configure Database

This project uses SQLite for local development.

Create the SQLite database if it does not exist.

Windows PowerShell:

    New-Item database/database.sqlite -ItemType File

macOS/Linux:

    touch database/database.sqlite

Run the database migrations:

    php artisan migrate

### 5. Run the Application

Start the Laravel development server:

    php artisan serve

In a separate terminal, start the Vite development server:

    npm run dev

Open the application at:

    http://127.0.0.1:8000

Keep both the Laravel and Vite development servers running while developing.

## Frontend Structure

The project uses React with Inertia.js.

    resources/
    ├── css/
    │   └── app.css
    │
    ├── js/
    │   ├── app.jsx
    │   ├── Pages/
    │   │   └── Home.jsx
    │   ├── Components/
    │   └── Layouts/
    │
    └── views/
        └── app.blade.php

Inertia pages are located inside `resources/js/Pages`.

For example:

    resources/js/Pages/Home.jsx

A Laravel route can render an Inertia page using:

    use Inertia\Inertia;

    Route::get('/', function () {
        return Inertia::render('Home');
    });

The `Home` page resolves to `resources/js/Pages/Home.jsx`.

## Useful Commands

Clear Laravel caches:

    php artisan optimize:clear

View registered routes:

    php artisan route:list

Run migrations:

    php artisan migrate

Start Laravel:

    php artisan serve

Start Vite:

    npm run dev

Build frontend assets:

    npm run build

## Troubleshooting

### `vendor/autoload.php` not found

Run:

    composer install

### `No application encryption key has been specified`

Make sure `.env` exists, then run:

    php artisan key:generate

### SQLite `could not find driver`

Check the installed PHP extensions:

    php -m

Make sure the following extensions are enabled:

    pdo_sqlite
    sqlite3

### Vite uses another port

If port `5173` is already in use, Vite may automatically use another port.

To check which process is using port `5173` on Windows:

    netstat -ano | findstr :5173

To terminate the process:

    taskkill /PID <PID> /F

### React page is blank

Make sure both development servers are running:

    php artisan serve

    npm run dev

Then clear the Laravel cache:

    php artisan optimize:clear

If the page is still blank, open the browser Developer Tools and check the Console for React, Inertia, or Vite errors.

## Git Workflow

Pull the latest changes before starting work:

    git pull origin main

Create a feature branch:

    git checkout -b feat/your-feature-name

Use Conventional Commits when committing changes.

Examples:

    feat(home): add homepage
    fix(auth): fix authentication issue
    chore(frontend): configure React and Inertia.js
    refactor(ui): improve component structure

Push your branch:

    git push origin feat/your-feature-name

## Project Status

- [x] Laravel backend
- [x] React frontend
- [x] Inertia.js integration
- [x] Vite configuration
- [x] Tailwind CSS integration
- [x] Initial homepage
- [ ] Application-specific features
- [ ] Final UI design

## Notes for Contributors

Before submitting a pull request:

1. Pull the latest changes from `main`.
2. Install any new dependencies.
3. Make sure Laravel starts successfully.
4. Make sure Vite starts successfully.
5. Test your changes in the browser.
6. Check the browser console for errors.
7. Follow the Conventional Commit format.
8. Keep unrelated changes out of your branch.
