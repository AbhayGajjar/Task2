//GET request for Users

import { NextResponse } from "next/server";

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