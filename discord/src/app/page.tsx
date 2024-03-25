"use client"
import { Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SideBarNavigation from "@/app/components/SideBarNavigation";
import BottomBar from "./components/BottomBar";
import TopSection from "./components/TopSection";
import Section1 from "./components/homepage/Section1";
import Section2 from "./components/homepage/Section2";
import Section3 from "./components/homepage/Section3";

const HomePage = () => {

    const { data: session } = useSession();

    

    return (
        <div className="flex justify-center md:mt-6 md:mx-12">
            <div className="bg-slate-700 flex flex-col w-full  overflow-hidden rounded-xl h-[800px]">
                <TopSection />
                <div className="grid grid-cols-12 h-full border-t-1 border-neutral-200">
                    <div className="col-span-1 border-r-2 border-slate-500 ">
                        <SideBarNavigation />
                    </div>
                    <div className="col-span-2 "><Section1/></div>
                    <div className="col-span-6 border-x-2 border-slate-500 "><Section2/></div>
                    <div className="col-span-3 border-slate-500 "><Section3/></div>
                </div>
                <BottomBar/>
            </div>
        </div>
    )

}

export default HomePage;