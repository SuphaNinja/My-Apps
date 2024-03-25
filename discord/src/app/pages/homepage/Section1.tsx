
import api  from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { auth } from "auth";



export default  function Section1() {
    
   
   /*  const  user  = useQuery({
        queryKey: ["user"],
        queryFn: () => api.getCurrentUser()
        
    }); */

    


    return (
        <div>
            <h1>section 1</h1>
            <button /* onClick={() => console.log(session)} */>test</button>
        </div>
    )
}