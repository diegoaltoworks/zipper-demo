'use client';

import { downloadZipFile } from '@diegoaltoworks/zipper';

const clientSideDownload = async () => {
  await downloadZipFile([
    { url: 'https://diegoaltoworks.github.io/zipper/data/A0.pdf', name: 'A.pdf' },
    { url: 'https://diegoaltoworks.github.io/zipper/data/B0.pdf', name: 'B.pdf' }
  ], {
    zipFilename: 'client-side.zip',
    onProgress: (current, total) => {
      console.log(`Client: ${current}/${total}`);
    }
  });
};

const serverSideDownload = async () => {
  window.location.href = '/api/download';
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="max-w-2xl mx-auto p-8 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Zipper
          </h1>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Isomorphic Demo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Test both client-side and server-side ZIP generation
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <a
              href="https://github.com/diegoaltoworks/zipper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Package on GitHub
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://www.npmjs.com/package/@diegoaltoworks/zipper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              NPM
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://diegoaltoworks.github.io/zipper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Docs
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Client-Side Download
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Downloads files in the browser and triggers download
            </p>
            <button
              onClick={clientSideDownload}
              className="w-full p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Download ZIP (Client-Side)
            </button>
          </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Server-Side Download
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Server generates ZIP using Next.js API route
            </p>
            <button
              onClick={serverSideDownload}
              className="w-full p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Download ZIP (Server-Side)
            </button>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-500">
          <p>Check browser console for progress updates</p>
          <p className="mt-2">Server logs visible in terminal</p>
        </div>

        <div className="p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-900">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            About This Demo
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This demo showcases{' '}
            <a
              href="https://github.com/diegoaltoworks/zipper"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              @diegoaltoworks/zipper
            </a>
            , an isomorphic TypeScript package for downloading and zipping files
            in both browser and Node.js environments.
          </p>
        </div>

          <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg border-2 border-gray-900 dark:border-gray-100">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              View Source Code
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              See how this demo integrates the zipper package
            </p>
            <a
              href="https://github.com/diegoaltoworks/zipper-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
      </div>
    </div>
  );
}
