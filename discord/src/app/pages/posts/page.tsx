

"use client"
import { Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const PostsPage = () => {

    const { data: session } = useSession();

    

    return (
        <div className="flex items-center justify-center md:mt-12">
            <div className="bg-slate-700 flex flex-col  w-full md:w-2/3 overflow-hidden rounded-xl">
                <div className="flex w-full flex-col items-center bg-gradient-to-b from-slate-900 p-4 to-slate-700">
                    <div className="flex w-full">
                        <div className="flex ml-6 gap-6 mt-auto">
                            <Link  href={"/pages/posts"}>Create a post</Link>
                            <Link  href={"/pages/posts"}>View friends posts</Link>
                        </div>
                        <div className="flex flex-col gap-2 mx-auto justify-center items-center max-w-60">
                            <img alt="discord logo" src="https://seeklogo.com/images/D/discord-color-logo-E5E6DFEF80-seeklogo.com.png" className="w-24" />
                            <Link className="text-white text-2xl hover:underline" href={"/pages/posts"}>Latest posts</Link>
                        </div>
                        <div className="flex mr-6 gap-6 mt-auto">
                            <Link  href={"/pages/posts"}>Most liked</Link>
                            <Link  href={"/pages/posts"}>Report an issue</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PostsPage;