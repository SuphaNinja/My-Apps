import { Link } from "@nextui-org/react";


export default function TopSection () {


    return (
        <div className="flex w-full flex-col items-center bg-gradient-to-b from-slate-900 p-4 to-slate-700">
            <div className="flex w-full">
                <div className="flex flex-col gap-2 mx-auto justify-center items-center max-w-60">
                    <Link href="/"><img alt="discord logo" src="https://seeklogo.com/images/D/discord-color-logo-E5E6DFEF80-seeklogo.com.png" className="w-24" /></Link>
                    <Link className="text-white text-2xl hover:underline" href={"/"}>Discord</Link>
                </div>
            </div>
        </div>
    );
}