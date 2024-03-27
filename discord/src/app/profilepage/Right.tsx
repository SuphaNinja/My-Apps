"use client"

import RightSection from "@/app/main-components/RightSection";
import { UserWithAccount } from "@/lib/types";

export default function Right({ user, currentUser, followUser }:  { user: { data?: UserWithAccount }, currentUser: UserWithAccount , followUser: any}) {
    return (
        <RightSection>
                <h2>profile right section</h2>
        </RightSection>
    )
}