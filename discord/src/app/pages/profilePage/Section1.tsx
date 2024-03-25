"use client"
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { useSession } from "next-auth/react";



export default  function Section1() {
    
const session = useSession();

if (session.status === "loading") {
    return <div>loading...</div>;
}


return (
    <div>
        {!session.data || !session.data.user ? (
            <div className="flex">
                <p>Looks like you're not logged in. Sign Up or Sign In to view this page!</p>
            </div>
        ) : (
            <div className="flex flex-col w-full items-center justify-center mt-4">
                <div className="flex w-full">
                    <div className="w-1/3">{session.data.user.image ? <img src={session.data.user.image}/>: <div className=""><UserCircleIcon/></div>}</div>
                    <div className="flex flex-col gap-2 w-2/3">
                        <p className="flex w-full">First name: <span className="ml-auto w-1/2">{session.data.user.firstName || "undefined"}</span></p>
                        <p className="flex w-full">Last name: <span className="ml-auto w-1/2">{session.data.user.lastName || "undefined"}</span></p>
                        <p className="flex w-full">Username: <span className="ml-auto w-1/2">{session.data.user.userName || "undefined"}</span></p>
                        <p className="flex w-full">Phone number: <span className="ml-auto w-1/2">{session.data.user.phoneNumber || "undefined"}</span></p>
                        <p className="flex w-full">Email: <span className="ml-auto w-1/2">{session.data.user.email || "undefined"}</span></p>
                    </div>
                </div>
            </div>
        )}
    </div>
);
}