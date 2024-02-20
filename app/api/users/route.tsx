//GET request for Users

import { connectdb } from "@/utils/db";
import { NextResponse } from "next/server";

connectdb();

export async function GET(){
    const users = [
        {
            name:"abhay",
            roll:32,
            address:"kalol",

        },
        {
            name:"yash",
            roll:22,
            address:"kalol",

        },
        {
            name:"arryan",
            roll:35,
            address:"kalol",

        },
    ]

    return NextResponse.json(users);
}

//DELETE FOR USERS

export async function DELETE(){
    return NextResponse.json({
        message:"this is for testing..."
    })
}