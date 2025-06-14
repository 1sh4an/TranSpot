import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex w-full justify-center mt-10">
      <nav className="flex w-[80%] justify-between items-center mt-6 px-4 sm:px-10">
        <Link
          to="/"
          className="text-lg font-medium text-black hover:text-zinc-700"
        >
          <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-400 text-transparent bg-clip-text font-bold text-2xl">
            TranSpot
          </span>
        </Link>
        <a href="https://github.com/1sh4an/TranSpot" className="flex">
          <FaGithub className="w-6 h-6 sm:mr-2" />
          <span className="hidden sm:inline text-lg font-medium">GitHub</span>
        </a>
      </nav>
    </div>
  );
}
