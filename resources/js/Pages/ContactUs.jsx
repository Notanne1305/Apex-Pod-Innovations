export default function ContactUs() {
    return (
        <>
        c

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

                        <a href="/services" className="hover:underline">
                            Services
                        </a>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </nav>
                </header>

                {/* Page Content */}
                <section className="flex flex-1 items-center py-20 sm:py-24">
                    <div className="w-full max-w-3xl">
                        <p className="mb-5 text-sm font-medium uppercase tracking-wide">
                            Contact Us
                        </p>

                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Get in touch.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg">
                            This is a placeholder Contact page used to test
                            routing and layout consistency across the site.
                            The form below is not yet wired up to a backend.
                        </p>

                        <form className="mt-10 flex max-w-md flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="min-h-11 rounded-md border border-black/20 px-3 py-2 text-sm"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="min-h-11 rounded-md border border-black/20 px-3 py-2 text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="rounded-md border border-black/20 px-3 py-2 text-sm"
                                    placeholder="Your message"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-md border border-black bg-black px-6 py-3 text-sm font-medium text-white"
                            >
                                Send Message
                            </button>
                        </form>
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