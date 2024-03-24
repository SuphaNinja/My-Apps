"use client";

import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const AppBarButtons = () => {

    const { data: session } = useSession();

    const test = () => {
    console.log(session)
}
    return (
        <div className="flex items-center gap-3">
        {session && session.user ? (
        <>
            <Link className="text-md hover:underline text-emerald-500 hover:text-emerald-600 transition-colors text-2xl mr-10" href={"/pages/posts"}>Posts</Link>
            <Button color="" as={Link} href="/pages/profilePage" className="text-xl underline underline-offset-2 mr-2 text-cyan-300">{session.user.userName}</Button>
            <Link className="text-md hover:underline text-sky-500 hover:text-sky-600 transition-colors" href={"/api/auth/signout"}>Sign out</Link>
        </>
        ):(
        <>  
            <Button className="text-md hover:underline bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600" onClick={() => signIn()}>Sign in</Button>
            <Button className="text-md hover:underline bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600" as={Link} href={"/auth/signup"}>Sign up</Button>
        </>
        )}
        </div>
    )
};

export default AppBarButtons;