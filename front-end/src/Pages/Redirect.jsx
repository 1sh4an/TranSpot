import * as React from "react"
import HowTo from "../components/comp/Page2/Auth"
import Navbar from "../components/comp/Page1/navig"
import Create from "../components/comp/Page2/create-playlist"
import { Footer } from "../components/comp/Page1/footer"
export default function Redirect(){
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <HowTo/>
            </div>
            <div className="mt-20">
                <Create/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

