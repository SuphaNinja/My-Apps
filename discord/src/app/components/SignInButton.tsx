"use client";

import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const SignInButton = () => {

    const { data: session } = useSession();

    const test = () => {
    console.log(session)
}
    return (
        <div className="flex items-center gap-3">
        {session && session.user ? (
        <>
            <button onClick={test}>test</button>
            <p>{session.user.firstName}</p>
            <Link color="danger"  className="text-md hover:underline text-sky-500 hover:text-sky-600 transition-colors" href={"/api/auth/signout"}>Sign out</Link>
        </>
        ):(
        <>
            <button onClick={test}>test</button>
            <Button className="text-md hover:underline bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600" as={Link} href={"/api/auth/signin"}>Sign in</Button>
            <Button className="text-md hover:underline bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600" as={Link} href={"/auth/signup"}>Sign up</Button>
        </>
        )}
        </div>
    )
};

export default SignInButton;