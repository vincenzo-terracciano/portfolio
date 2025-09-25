export default function Footer() {
    return (
        <footer className="mt-16 py-10 text-center text-sm text-gray-400 border-t border-gray-200 dark:border-gray-700">
            <p>© {new Date().getFullYear()} Vincenzo Terracciano — Built with React + Tailwind</p>
            <div className="mt-3 flex justify-center gap-6">
                <a href="https://github.com/vincenzo-terracciano" target="_blank" rel="noreferrer" className="hover:text-brand-blue">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/vincenzo-terracciano-0a6676154/" target="_blank" rel="noreferrer" className="hover:text-brand-blue">
                    LinkedIn
                </a>
            </div>
        </footer>
    )
}