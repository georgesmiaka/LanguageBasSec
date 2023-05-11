import { Schema } from "mongoose";
import { User } from "../model/user.interface";
import { conn } from "./conn";

const userSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },

});

async function makeUserModel() {
    return (await conn).model<User>("userlist", userSchema);
}
export const userModel = makeUserModel();
