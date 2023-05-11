import { User } from "../model/user.interface";

 export interface IUserService {
    getUsers(): Promise<Array<User>>
    getUserById(): Promise<User>
    createUser(username: string, password: string, name: string): Promise<User>
    delUser(id: number): Promise<boolean>

}