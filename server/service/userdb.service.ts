import { User } from "../model/user.interface";
import { IUserService } from "./iuser.service";
import { userModel } from "../db/user.db";


class UserDBService implements IUserService {
    getUserById(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    async getUsers(): Promise<User[]> {
        const mm = await userModel;
        return await mm.find();
    }


    async createUser(username: string, password: string, name: string): Promise<User> {
        const mm = await userModel;
        return await mm.create({
            id: new Date().valueOf(),
            username: username,
            password: password,
            name: name,
        });
    }
    async delUser(id: number): Promise<boolean> {
        const mm = await userModel;
        const result = await mm.deleteOne(
            {id : id},
        );
        return (result.deletedCount === 1);
    }

}

export const userDBService = new UserDBService();