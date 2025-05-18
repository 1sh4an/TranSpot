import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import Spidy from "../../../assets/Spiderman.jpg"

export default function HowTo(){
  const steps = [
    {
    title:"Open Developer Tools and go to the Network tab",
    content:"Open the developer tools in your browser and go to the network tab. You can do this by right-clicking anywhere on the page and selecting 'Inspect' or by pressing 'Ctrl + Shift + I'.",
  },
    {
      title:"Sign into YouTube Music",
      content:(
        <>
          Go to {" "}
          <a href=" https://music.youtube.com/" >
            https://music.youtube.com/ 
          </a>{" "}
          and make sure you are signed in with your Google account.
        </>
      ),
    },
    {
      title:"Find an authenticated POST request",
      content: (
        <>
          <p>
          Filter by /browse in the search bar of the Network tab. Find a POST request with a status of 200
          </p>
          <p classname= "mt-4">
          Firefox (recommended):
          </p>
          <ul className="list-disc list-inside mb-2 ml-4">
            <li>
            Verify that the request looks like this:{" "}
            <span className="font-bold">Status :</span> 200,{" "}
            <span className="font-bold"> Method :</span>POST,{" "} 
            <span className="font-bold"> Domain :</span>music.youtube.com,{" "} 
            <span className="font-bold"> File :</span>browse?...
            </li>
            <li>
            <p>
              Copy the request headers (right click {">"} copy {">"} copy request headers)
            </p>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return(
    <div>
      <Card className="flex-row overflow-hidden w-[1000px] mt-10">
        <CardContent>
          <h2 className="text-3xl subpixel-antialiased font-bold">
            How to get auth headers?
          </h2>
          <div className="space-y-5 mb-10 mt-8 justify-end">
              {steps.map((step, index) => (
                  <Step
                      key={index}
                      index={index}
                      title={step.title}
                      description={step.content}
                  />
              ))}
            </div>
        </CardContent>
        <div className="flex-1 bg-zinc-100 max-h-[800px] lg:min-h-0 hidden lg:block rounded-lg mr-6">
          <img
            src={Spidy}
            className="rounded-lg "
          />
        </div>
      </Card>
    </div>
  );
}

function Step({ title, description, index }) {
  return (
      <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm">
                  {index + 1}
              </span>
          </div>
          <div>
              <h3 className="font-medium">{title}</h3>
              <div className="text-sm text-zinc-500 w-[500px]">{description}</div>
          </div>
      </div>
  );
}
