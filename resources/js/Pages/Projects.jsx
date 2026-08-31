export default function Projects() {
    return (
        <>
        <Head title="Projects" />


        <main className="min-h-screen bg-white text-black">
            <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-12">

                {/* Header */}
                <header className="flex items-center justify-between border-b border-black/10 pb-6">
                    <div>
                        <h1 className="text-xl font-semibold">
                            Apex Pod Innovations
                        </h1>
                    </div>

                    <nav className="flex items-center gap-6 text-sm">
                        <a href="/" className="hover:underline">
                            Home
                        </a>

                        <a href="/about-us" className="hover:underline">
                            About
                        </a>

                        <a href="#" className="hover:underline">
                            Projects
                        </a>

                        <a href="/services" className="hover:underline">
                            Services
                        </a>
                        <a href="/contact-us" className="hover:underline">
                            Contact
                        </a>
                    </nav>
                </header>

                {/* Page Content */}
                <section className="flex flex-1 items-center py-20 sm:py-24">
                    <div className="max-w-3xl">
                        <p className="mb-5 text-sm font-medium uppercase tracking-wide">
                            Projects
                        </p>

                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            What we've built.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg">
                            This is a placeholder Projects page used to test
                            routing and layout consistency across the site.
                            Real project listings will be added later.
                        </p>
                    </div>
                </section>

                {/* Project List */}
                <section className="border-t border-black/10 py-12">
                    <div className="grid gap-8 md:grid-cols-3">
                        <article className="rounded-lg border border-black/10 p-6">
                            <h3 className="text-lg font-semibold">
                                Project One
                            </h3>

                            <p className="mt-3 text-sm leading-6">
                                Placeholder description of the first sample
                                project.
                            </p>
                        </article>

                        <article className="rounded-lg border border-black/10 p-6">
                            <h3 className="text-lg font-semibold">
                                Project Two
                            </h3>

                            <p className="mt-3 text-sm leading-6">
                                Placeholder description of the second sample
                                project.
                            </p>
                        </article>

                        <article className="rounded-lg border border-black/10 p-6">
                            <h3 className="text-lg font-semibold">
                                Project Three
                            </h3>

                            <p className="mt-3 text-sm leading-6">
                                Placeholder description of the third sample
                                project.
                            </p>
                        </article>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-black/10 pt-6">
                    <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © 2026 Apex Pod Innovations
                        </p>

                        <div className="flex gap-5">
                            <a href="#" className="hover:underline">
                                Privacy
                            </a>

                            <a href="#" className="hover:underline">
                                Terms
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
        </>
    );
}   