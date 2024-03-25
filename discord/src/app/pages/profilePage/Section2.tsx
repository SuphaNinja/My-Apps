"use client"

import { useQuery } from "@tanstack/react-query"
import api from "@/lib/axios"



export default function Section2() {

    const user = useQuery({
        queryKey: ["data"],
        queryFn: () => api.getCurrentUser()
    })



    return (
        <div>
            <button onClick={() => console.log(user)} className="text-2xl">test</button>
            <h1>section 2</h1>
        </div>
    )
}