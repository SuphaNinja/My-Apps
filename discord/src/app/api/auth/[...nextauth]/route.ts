import { PrismaAdapter } from "@auth/prisma-adapter"
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import NextAuth from "next-auth/next";
import prisma from "@/lib/prisma";
import { Auth } from "@auth/core";

export const request = new Request("http://localhost:3000");

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        })
    ],
}

export const handler =  Auth(request, authOptions);

