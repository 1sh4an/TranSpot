import * as React from "react"
import HowTo from "../components/comp/Page2/Auth"
import Navbar from "../components/comp/Page1/navig"

export default function Redirect(){
    return(
        <div className="flex w-screen flex-col items-center justify-center mt-5">
            <div className="w-full max-w-[1000px] px-4">
                <Navbar/>
            </div>
            <HowTo/>
        </div>
    )
}

