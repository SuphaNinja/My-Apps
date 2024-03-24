"use client"
import { useSession } from "next-auth/react";

const ProfilePage = () => {

    const { data: session } = useSession();

    

    return (
        <div>
            <h1 className="text-6xl">Profile Page</h1>
        </div>
    )

}

export default ProfilePage;