import { Card, CardContent } from "../../ui/card";

export default function HowToUse(){
    const steps=[
        {
            title : "Step 1",
            content:(
            <>
            Login to youtube music at {" "}
            <a
                href="https://music.youtube.com"
            >
                music.youtube.com
            </a>
            </>
            ),
        },
        {
            title: "Step 2",
            content: "Grab the Request Headers from the Network tab (explained later)",
        },
        {
            title: "Step 3",
            content: "Paste the playlist link and you're done!",
        }
    ]

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col  justify-center items-center gap-4  w-full max-w-[1000px] md:flex-row">
                {steps.map((step, index) => (
                    <Card key={index}  className="w-full max-w-sm h-45 items-center">
                        <CardContent className="flex flex-col mt-3 p-6 text-center h-full ">
                            <h2 className="text-2xl font-bold ">{step.title}</h2>
                                <p className="mt-2 text-sm text-gray-600">
                                    {step.content}
                                </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );

}