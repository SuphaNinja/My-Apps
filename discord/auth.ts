import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import * as bcrypt from "bcrypt";




const credentialsConfig = CredentialsProvider({
    name: "Credentials",
    
    credentials: {
        userName: { label: "Email", type: "email", placeholder: "Enter your Email." },
        password: { label: "Password", type: "password" },
    },

    async authorize(credentials: { userName: string; password: string }) {
        const user = await prisma.user.findUnique({
            where: {
                email: credentials?.userName,
            },
        });

        if(!user) throw new Error("Username or password is incorrect.");
        
       if(!credentials?.password) throw new Error("Please provide a password.");
       const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

       if(!isPasswordCorrect) throw new Error("Username or password is incorrect.");

       const { password, ...userWithoutPass } = user;
       return userWithoutPass;
    }
});

export const config = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Google,
        Github,
        credentialsConfig,
    ],
}  satisfies NextAuthConfig;

export const {handlers, auth,signIn,signOut } = NextAuth(config);