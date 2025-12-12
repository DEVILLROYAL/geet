import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import bcrpt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";

export async function POST(req) {
    try{
        
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!User) return NextResponse.json({ error: "User not found" });

    const correct = await bcrypt.compare( password, user.password );
    if (!correct) return NextResponse.json({ error: "Incorrect password" });

    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    return NextResponse.json({ message: "Login success", token });

    }catch ( error ){
        return NextResponse.json({ error: error.message });
    };
};