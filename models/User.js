import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    email:{ type: string, unique: true },
    password: String,
});
export default mongoose.models.User || mongoose.model("user", UserSchema);