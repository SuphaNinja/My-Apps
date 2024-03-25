"use client"
import { auth } from "auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "next-auth/react";







export async function GET (request: NextRequest) {
    try {
        const session = await auth();
   
    if (!session) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user?.email, },
        include: {accounts: true}
    });

    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 402 });
    }
    console.log(session)
    return NextResponse.json( user, { status: 200 });
    } 
    catch (error) {
        console.error(error)
    }
};