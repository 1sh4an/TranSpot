import { FaGithub } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="flex w-full justify-between items-center mt-6 px-4 sm:px-10">
                <span className="bg-gradient-to-r from-gray-500 to-gray-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
                    TranSpot
                </span>
                <a
                href="https://github.com/Pushan2005/SpotTransfer"
                className="flex"
                >
                <FaGithub className="w-6 h-6 sm:mr-2" />
                <span className="hidden sm:inline text-lg font-medium">
                    GitHub
                </span>
                </a>
        </nav>
    );
}


