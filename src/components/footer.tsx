export default function Footer() {
  return (
    <footer id="footer" className="flex flex-col bg-white border-t border-neutral-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4 max-w-xl">
          <h3 className="text-lg font-bold text-neutral-700">CBCatalyst</h3>
          <p className="text-sm text-neutral-600">
            AI-driven marketplace to help purchasing and sourcing teams quickly identify new global
            supply partners for contract manufacturing
          </p>
          <a
            href="mailto:info@cbcatalyst.com"
            className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-cb-orange transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5m-9.75-6.5l9.75 6.5"
              />
            </svg>
            info@cbcatalyst.com
          </a>
        </div>

        <div className="pt-8 mt-8 border-t border-neutral-200">
          <p className="text-neutral-600 text-sm">© 2025 CBCatalyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
