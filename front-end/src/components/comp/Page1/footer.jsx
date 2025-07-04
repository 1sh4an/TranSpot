import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="border-t w-full mt-28 py-12 text-center text-sm text-gray-500">
            <div className="container mx-auto px-4">
                <p className="mb-2">
                    Built by{" "}
                    <a
                        href="https://github.com/1sh4an"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-700 hover:text-blue-500 transition-colors inline-flex items-center gap-1"
                    >
                        @1sh4an
                        <FaGithub className="w-4 h-4" />
                    </a>
                </p>
            </div>
        </footer>
    );
}