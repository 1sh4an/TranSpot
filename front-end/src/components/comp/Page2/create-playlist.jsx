import * as React from "react"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
export default function Create(){
    return(
        <div>
            <h2 className="text-center bg-gradient-to-r from-white via-zinc-300 to-zinc-400 text-transparent bg-clip-text font-bold text-2xl">
                Create-Playlist
            </h2>

            <div className="flex overflow-hidden w-[1200px] mt-10">
                    <div className="w-1/2 flex flex-col items-center">
                        <h2 className="text-xl text-center font-bold color-white ">
                            Paste Header
                        </h2>
                        <div>
                            <Textarea
                            placeholder="Paste your headers here"
                            className="w-[40vw] h-[50vh] mt-6"
                        />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center ml-50">
                            <h2 className="text-xl text-center font-bold color-white">
                                You need to be connected to the server
                            </h2>
                            <div className="mt-4 ">
                                <Button className="w-[370px]">
                                    Connect
                                </Button>
                            </div>
                            <h2 className="text-lg font-bold mt-10 text-left w-[370px]">
                                Paste spotify Playlist here:
                            </h2>
                            <div className="self-start w-[250px] justify-left flex-row mt-3 ml-6">
                                <Input type="email" placeholder="Email" />
                                <Button className="w-[250px] mt-3 align-left ">
                                    Clone-Playlist
                                </Button>
                            </div>
                    </div>
            </div>
        </div>
    )
}