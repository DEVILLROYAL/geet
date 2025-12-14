import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function GET(req) {
    try{
        await connectDB();

        const token = req.headers.get("authorization")?.split(" ")[1];
        if (!token) return NextResponse.json({ error: "No token" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await user.findById(decoded.id).select("-password");

        return NextResponse.json({ user });

    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
};