import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="text-center">
                <p className="text-8xl font-extrabold bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent select-none">404</p>
                <h1 className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Page not found</h1>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">The page you are looking for doesn’t exist or was moved.</p>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center rounded-md bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 px-5 py-2.5 text-white shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    >
                        Go home
                    </Link>
                    <a href="mailto:"
                       className="inline-flex items-center rounded-md border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                        Report an issue
                    </a>
                </div>
            </div>
        </main>
    );
};

export default ErrorPage;
