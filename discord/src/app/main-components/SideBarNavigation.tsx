"use client "

import { AtSymbolIcon, CameraIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/16/solid";

import { signIn, signOut } from "next-auth/react";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import  api  from "@/lib/axios";

import HoverableLink from "../components/HoverableLink";
import { Link } from "@nextui-org/react";


export default function SideBarNavigation () {
    
    const user = useQuery({
        queryKey: ["user"],
        queryFn: () => api.getCurrentUser(),
    });
    return (
        <nav className=" border-r-2">
            {user.isSuccess && user.data ? (
            <div className="flex col-span-1 border-slate-400 flex-col items-center justify-between h-full py-4 pt-8">
                <button onClick={() => console.log(user)}>test</button>
                <HoverableLink href={user.isSuccess ? "/profilepage/" + user.data.id : "/"}
                    icon={user.data.image ? 
                    <div className="rounded-full overflow-hidden w-16">
                        <img src={user.data.image}/>
                    </div> : 
                    <UserCircleIcon className="w-12"/>
                } 
                text={<div className="flex flex-col gap-2 text-center ">
                        <p>My Account</p>
                        <button className="text-sm bg-black p-1 rounded-md hover:underline" onClick={() => signOut()}>Sign out</button>
                    </div>}
                />
                <HoverableLink href="#" icon={<HomeIcon className="w-14"/>} text="Home"/>
                <HoverableLink href="#" icon={<ChatBubbleBottomCenterTextIcon className="w-14"/>} text="Notifications"/>
                <HoverableLink href="#" icon={<CameraIcon className="w-14"/>} text="Posts"/>
                <HoverableLink href="#" icon={<AtSymbolIcon className="w-14"/>} text="Friends"/>
                <HoverableLink href="#" className="ml-0" icon={<Cog8ToothIcon className="w-14"/>} text={
                <div className="flex flex-col gap-2 text-center ">
                    <p>Settings</p>
                    <button className="text-sm bg-black p-1 rounded-md hover:underline" onClick={() => signOut()}>Sign out</button>
                </div>
                }/> 
            </div> 
        ):(
            <div className="flex flex-col gap-4 items-center text-center">
                <p>You're not logged in</p>
                <Link href="/api/auth/signin" className="text-white bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl px-2 py-1">Sign in</Link>
                <Link href="/api/auth/signup" className="text-white bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl px-2 py-1 hover:underline">Sign up</Link>
            </div>
        )}
        </nav>
    )
};