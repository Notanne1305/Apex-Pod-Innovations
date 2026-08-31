import { Link } from '@inertiajs/react';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white p-10 text-black">
            <h1 className="text-3xl font-semibold">
                Services
            </h1>

            <p className="mt-4">
                This is the Services page.
            </p>

            <Link
                href="/"
                className="mt-6 inline-block rounded-md border border-black px-4 py-2 text-sm hover:bg-black hover:text-white"
            >
                Back to Home
            </Link>
        </div>
    );
}