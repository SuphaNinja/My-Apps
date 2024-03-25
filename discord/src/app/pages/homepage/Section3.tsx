"use client"

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

export default function Section3() {


    const user = useQuery({
        queryKey: ["user"],
        queryFn: () => api.getCurrentUser(),
    })


    if (user.isLoading) return <div>Loading...</div>
    return (
        <div>
            <h1>{user.data.name}</h1>
            <button onClick={()=> console.log(user)}> test</button>
        </div>
    )
}