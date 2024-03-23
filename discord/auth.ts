import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import * as bcrypt from "bcrypt";
import { encode, decode } from "next-auth/jwt";
import { User } from "@prisma/client";


const credentialsConfig = CredentialsProvider({
    name: "Credentials",
    
    credentials: {
        userName: { label: "Username", type: "text", placeholder: "Enter your username." },
        password: { label: "Password", type: "password" },
    },

    async authorize(credentials, req) {
        const InputUserName = credentials.userName as string;
        const InputPassword = credentials.password as string;

        const userByUsername = await prisma.user.findUnique({
            where: {
                userName: InputUserName || undefined
            }
        });

        const userByEmail = await prisma.user.findUnique({
            where: {
                email: InputUserName || undefined
            }
        });

        if(!userByUsername && !userByEmail) throw new Error("Username or password is incorrect.");

        let isPasswordCorrect = false;
        let userWithoutPass: Omit<User, "password"> | undefined = undefined;

        if (userByEmail) { 
            isPasswordCorrect = await bcrypt.compare(InputPassword, userByEmail.password);
            let { password, ...userWithoutPassTemp } = userByEmail;
            userWithoutPass = userWithoutPassTemp;
        }
        if (userByUsername) { 
            isPasswordCorrect = await bcrypt.compare(InputPassword, userByUsername.password);
            let { password, ...userWithoutPassTemp } = userByUsername;
            userWithoutPass = userWithoutPassTemp;
        }
        
    if(!credentials?.password) throw new Error("Please provide a password.");
    

    if(!isPasswordCorrect) throw new Error("Email or password is incorrect.");

    
    if (!userWithoutPass) throw new Error("User not found.");
        
    return userWithoutPass;
    
    }
});

export const config = {
    
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    providers: [
        Google,
        Github,
        credentialsConfig,
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user as User;
            return token;
        },
        
        async session({ token, session }) {
            session.user = token.user;
            return session;
        }
    }
}  satisfies NextAuthConfig;

export const {handlers, auth,signIn,signOut } = NextAuth(config);