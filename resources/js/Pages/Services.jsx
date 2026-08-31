export default function Services() {
    return (
        <>
        <Head title="Services" />

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

                        <a href="/projects" className="hover:underline">
                            Projects
                        </a>

                        <a href="#" className="hover:underline">
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
                            Services
                        </p>

                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            What we offer.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg">
                            This is a placeholder Services page used to test
                            routing and layout consistency across the site.
                            Real service offerings will be added later.
                        </p>
                    </div>
                </section>

                {/* Services List */}
                <section className="border-t border-black/10 py-12">
                    <div className="grid gap-8 md:grid-cols-3">
                        <article className="rounded-lg border border-black/10 p-6">
                            <h3 className="text-lg font-semibold">
                                Service One
                            </h3>

                            <p className="mt-3 text-sm leading-6">
                                Placeholder description of the first sample
                                service.
                            </p>
                        </article>

                        <article className="rounded-lg border border-black/10 p-6">
                            <h3 className="text-lg font-semibold">
                                Service Two
                            </h3>

                            <p className="mt-3 text-sm leading-6">
                                Placeholder description of the second sample
                                service.
                            </p>
                        </article>

                        <article className="rounded-lg border border-black/10 p-6">
                            <h3 className="text-lg font-semibold">
                                Service Three
                            </h3>

                            <p className="mt-3 text-sm leading-6">
                                Placeholder description of the third sample
                                service.
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