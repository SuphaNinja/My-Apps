"use client"
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react"



export default function Section2() {

    const session = useSession();


    return (
        <>
            {session.status === "loading" ? <p>loading...</p> : null}
            {session.data && session.data.user ? (
                <div className="flex justify-between items-center p-4 border-b-2 border-slate-600">
                    <div className="flex items-center gap-4">
                        {session.data.user.image ? <img  className="w-24 rounded-full" src={session.data.user.image}/> : <p className="">Image not found!</p>}
                        <div>
                            <h2 className="text-xl font semibold">{session.data.user.name}</h2>
                            <h4 className="">{session.data.user.email}</h4>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="text-center">
                                <h3 className="font-semibold">100</h3>
                                <h4>Followers</h4>
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold">58</h3>
                                <h4>Following</h4>
                            </div>
                        </div>
                        <button  className="p-1 bg-sky-600 rounded-xl">Follow</button>
                    </div>
                </div>
            ):(
                null
            )}
        </>
    )
}