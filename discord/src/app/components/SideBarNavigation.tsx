"use client "
import Link from "next/link";
import { AtSymbolIcon, CameraIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User, user } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Cog8ToothIcon } from "@heroicons/react/20/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

import HoverableLink from "./HoverableLink";


export default function SideBarNavigation () {
    const { data: session } = useSession();
    
    
    const test = () => {
        console.log(session)
    }

    return (
        <nav className="flex flex-col items-center justify-between h-full py-4 pt-8 ">
            <button onClick={test}>test</button>
            {session && session.user ? (
            <Dropdown  placement="right">
                <DropdownTrigger className="text-xl underline underline-offset-2 mr-2 text-cyan-300">
                    <div><HoverableLink href="#" /* href={"app/profile" + session.user.id} */ icon={session.user.image ? <img src={session.user.image}/> : <UserCircleIcon className="w-12"/>} text={"Account"}/></div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">{session.user.email}</p>
                    </DropdownItem>
                    <DropdownItem>
                        <Link className="" href={"/pages/profilePage"}>Profile</Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Button color="" size="md" className="p-0" onClick={() => signOut()}>Sign out</Button>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            ) : ( 
            <div className="flex flex-col">
                <Button color="" as={Link} href={"/auth/signin"} className="text-xl font-semibold hover:text-teal-600 text-teal-500 transition-colors hover:underline ">Sign in</Button>
                <p className="text-sm mx-auto">or</p>
                <Button color="" as={Link} href={"/auth/signup"} className="text-xl font-semibold hover:text-cyan-600 text-cyan-500 transition-colors hover:underline ">Sign up</Button>
            </div>
            )}
            <HoverableLink href="#" icon={<HomeIcon className="w-14"/>} text="Home"/>
            <HoverableLink href="#" icon={<ChatBubbleBottomCenterTextIcon className="w-14"/>} text="Notifications"/>
            <HoverableLink href="#" icon={<CameraIcon className="w-14"/>} text="Posts"/>
            <HoverableLink href="#" icon={<AtSymbolIcon className="w-14"/>} text="Friends"/>
            <HoverableLink href="#" icon={<Cog8ToothIcon className="w-14"/>} text="Settings"/>
        </nav>
    )
}