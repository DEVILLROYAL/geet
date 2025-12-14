import { NextResponse } from "next/server";

export async function POST(req) {
    try{

    const data = [
        {
        name: "deepak",
        email: "deepak@gmail.com",
        password: "1234",
    }
];
    const correct = await email.compare(data.email);
    if(!correct) {NextResponse.json({error: "user not found"})};

    return NextResponse.json({ message: "Login success"});

    }catch ( error ){
        return NextResponse.json({ error: error.message });
    };
};