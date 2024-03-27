"use client"
import SideBarNavigation from "@/app/main-components/SideBarNavigation";
import { useQuery } from "@tanstack/react-query";
import { SectionProps } from "@/lib/types";
import BottomBar from "../components/BottomBar";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import TopSection from "./TopSection";
import api from "@/lib/axios";
import { redirect } from "next/navigation";
import { Link } from "@nextui-org/react";

const PageStructure = ({left, middle, right, children, className}: SectionProps) => {

    const user = useQuery({
        queryKey: ["user"],
        queryFn: () => api.getCurrentUser(),
    })
    if (user.isLoading) {
        return (
        <div className="h-screen w-screen flex items-center justify-center text-center">
            <div className="text-6xl mx-auto my-auto font-bold">Loading...</div>
        </div>
        )
    }
    if (user.isError) {
            location.href = "/auth/signin"
    }
    if (!user) {
            location.href = "/auth/signin"
    }

    return (
        <div className="flex justify-center md:mt-6 md:mx-12">
            <div className="bg-slate-700 flex flex-col w-full overflow-hidden rounded-xl h-[700px]">
                <TopSection />
                <div className="grid grid-cols-12 h-full border-t-1 border-neutral-200">
                    <SideBarNavigation />
                    <LeftSection>{left}</LeftSection>
                    <MiddleSection>{middle}</MiddleSection>
                    <RightSection>{right}</RightSection>
                </div>
                <BottomBar />
            </div>
        </div>
    )

}

export default PageStructure;