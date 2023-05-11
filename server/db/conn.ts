import { createConnection, Connection } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

//export const conn : Promise<Connection> = Promise.resolve(createConnection(`mongodb+srv://${process.env.USER}:${process.env.PASSWD}@cluster0.glhkfrf.mongodb.net/?retryWrites=true&w=majority`));
//console.log(process.env.USER)
export const conn : Promise<Connection> = Promise.resolve(createConnection("mongodb+srv://group46:projectgroup46@cluster0.glhkfrf.mongodb.net/?retryWrites=true&w=majority"));