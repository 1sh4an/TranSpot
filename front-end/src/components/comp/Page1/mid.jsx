import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";
import Navbar from "./navig"
import { Link } from "react-router-dom";

export default function Mid(){
    return(
        <main className="flex justify-center items-center ">
            <div className="w-full max-w-[1000px] px-4">
               
                <div className="flex flex-col justify-center items-center mt-20 md:mt-30 lg:mt-40">
                    <div className="text-center">
                        <div className="flex justify-center items-center mb-6">
                            <a href="https://github.com/1sh4an/TranSpot">
                                <Button
                                    variant="outline"
                                    className="cursor-pointer dark:bg-gradient-to-r dark:from-gray-900 dark:to-black text-black dark:text-white flex justify-center items-center rounded-full px-6 py-3 text-lg border dark:border-gray-800"
                                >
                                    Star this on Github ⭐
                                </Button>
                            </a>
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto text-center mt-4 relative z-20 py-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                            Transfer your Spotify Playlist to YouTube Music
                        </h1>
                        <p className="text-center text-base sm:text-lg md:text-xl pb-4 transition-colors first:mt-0 bg-clip-text text-transparent bg-gradient-to-r from-black to-zinc-950 dark:from-gray-400 dark:to-gray-300">
                            TranSpot is a free service that allows you to
                            transfer your Spotify playlists to YouTube Music in
                            a few simple steps.
                        </p>
                        <form className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3 mt-8">
                            <span className="text-lg sm:text-xl font-medium tracking-tight transition-colors bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-700">
                                Paste your Spotify Link here
                            </span>
                            <Input
                                placeholder="open.spotify.com/playlist/. . ."
                                className="w-full sm:w-auto max-w-lg py-2 text-lg"
                            />
                            <Link to="/Redirect">
                                <Button className="cursor-pointer w-full sm:w-auto py-2 text-md">
                                    Get Started
                                </Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
