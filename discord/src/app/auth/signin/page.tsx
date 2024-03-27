"use client"
import { Button, Link } from "@nextui-org/react";
import SignInForm from "@/app/components/SignInForm";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

interface Props {
    searchParams: {
        callbackUrl?: string;
    };
};

const SignInPage = ({ searchParams }:Props) => {
    const { data, status } = useSession();
    if (data?.user.email) {
        useEffect(() => {
            toast.success("Sign in succesfull! Redirecting...");
            setTimeout(() => {
                window.location.href = searchParams.callbackUrl || "/";
            }, 1000);
        }, []);
    }
    
    return (
        <div className="flex items-center justify-center flex-col">
            <p className="mx-auto my-4"> Dont have an account yet? 
                <Button color="" className="text-xl font-semibold hover:underline" as={Link} href="/auth/signup">Sign up</Button>
            </p>
            <SignInForm callbackUrl={searchParams.callbackUrl} />
            <Link href="/auth/forgotPass">Forgot Your Password?</Link>
        </div>
    );
};

export default SignInPage;