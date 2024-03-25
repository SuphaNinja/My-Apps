"use client"
import BottomBar from "@/app/components/BottomBar";
import SideBarNavigation from "@/app/components/SideBarNavigation";
import TopSection from "@/app/components/TopSection";
import { useSession } from "next-auth/react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const ProfilePage = () => {

    const session  = useSession();

    

    return (
        <div className="flex justify-center md:mt-6 md:mx-12">
            <div className="bg-slate-700 flex flex-col w-full  overflow-hidden rounded-xl h-[800px]">
                <TopSection />
                <div className="grid grid-cols-12 h-full border-t-1 border-neutral-200">
                    <div className="hidden border-r-2 border-slate-500 ">   </div>
                    <div className="col-span-3 "><Section1/></div>
                    <div className="col-span-6 border-x-2 border-slate-500 "><Section2/></div>
                    <div className="col-span-3 border-slate-500 "><Section3/></div>
                </div>
                <BottomBar/>
            </div>
        </div>
    )

}

export default ProfilePage;