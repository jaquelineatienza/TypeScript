import mongoose, { Schema } from "mongoose";
import { User } from "types/UserTypes";

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    }
})

export const UserModel = mongoose.model<User>("User", UserSchema)