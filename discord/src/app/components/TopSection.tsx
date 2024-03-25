import { Button, Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function TopSection () {

    const session = useSession();

    return (
        <div className="flex w-full flex-col items-center bg-gradient-to-b from-slate-900 p-4 to-slate-700">
                    <div className="flex w-full">
                    <div className=" w-[20%]"></div>
                        <div className="flex flex-col gap-2 mx-auto justify-center items-center max-w-60">
                            <Link href="/"><img alt="discord logo" src="https://seeklogo.com/images/D/discord-color-logo-E5E6DFEF80-seeklogo.com.png" className="w-24" /></Link>
                            <Link className="text-white text-2xl hover:underline" href={"/"}>Discord</Link>
                        </div>
                        <div className="my-auto w-[20%]">
                            {session.data && session.data.user ? (
                                <Button className="p-0" onClick={() => signOut()}>Sign out</Button>
                            ):(
                            <div className="flex flex-col gap-4">
                                <Button as={Link} href={"/auth/signin"} className="text-xl font-semibold hover:text-teal-600 text-teal-500 transition-colors hover:underline ">Sign in</Button>
                                <Button as={Link} href={"/auth/signup"} className="text-xl font-semibold hover:text-cyan-600 text-cyan-500 transition-colors hover:underline ">Sign up</Button>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
    );
}