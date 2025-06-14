import * as React from "react";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
export default function Create() {
  

  return (
    <div className="py-10 px-4">
      <h2 className="text-center bg-gradient-to-r from-white via-zinc-300 to-zinc-400 text-transparent bg-clip-text font-bold text-2xl">
        Create-Playlist
      </h2>

      <div className="flex justify-center mt-10">
        <div className="w-[80%] flex flex-row">
         
          <div className="w-1/2 justify-center">
          <textarea
              className="w-[35vw] h-[50vh] p-2 border rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Place Headers Here"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="text-xl font-bold text-white text-center mb-4">
              You need to be connected to the server
            </h1>

            <Button className="m-4 cursor-pointer">Connect</Button>

            <h2 className="text-lg font-bold mt-10 text-left w-full max-w-md text-white">
              Paste Spotify Playlist here:
            </h2>

            <textarea
              className="w-full max-w-md h-24 mt-3 p-2 border rounded-md text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type playlist link here..."
            />

            <Button className="cursor-pointer mt-3">Clone-Playlist</Button>
          </div>
        </div>
      </div>
    </div>
  );
}