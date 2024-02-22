import { Spotlight } from "@/components/Spotlight";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { Button } from "@/components/moving-border";
import { cn } from "@/utils/cn";

export default function Home() {
    const words = [
        {
            text: "Hii",
        },
        {
            text: "I",
        },
        {
            text: "am",
        },
        {
            text: "Shivanshu",
            className: "text-blue-500, dark:text-blue-500",
        },
    ];
    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="">
                <Spotlight className="absolute -top-10  -left-10" fill="blue" />
            </div>
            <div className="text-white">
                <TypewriterEffectSmooth words={words} />
                <div className="w-full justify-center flex pt-10">
                    <Button
                        className=" text-lg font-semibold font-mono"
                        borderRadius="1rem"
                    >
                        Hire me
                    </Button>
                </div>
            </div>
        </div>
    );
}
