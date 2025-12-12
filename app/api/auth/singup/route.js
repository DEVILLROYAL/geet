import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req) {
    try {
        await connectDB();

        const { name, email, password } = await req.json();

        const exists = await User.findOne({ email });
        if (exists) return NextResponse.json({ error: "Email already exists" });

        const hased = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashed,
        });

        return NextResponse.json({ message:"User created" });

    } catch(err) {
        return NextResponse.json({ error: error.message });
    }
};