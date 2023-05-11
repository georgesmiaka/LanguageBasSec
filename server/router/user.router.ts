import Express from "express";
import { User } from "../model/user.interface";
import { IUserService } from "../service/iuser.service";
import { userDBService } from "../service/userdb.service";


export function makeUserRouter(userService : IUserService) : Express.Express {
    const userRouter : Express.Express = Express();
 
    userRouter.get("/", async (req: Express.Request, res: Express.Response) => {
        try {
            const ms = await userService;
            const users : Array<User> = await ms.getUsers();
            res.status(200).send(users); 
        } catch (e : any) {
            res.status(500).send(e.message);
        }
    });

    // POST or PUT /movie 
    userRouter.put("/", async (req: Express.Request, res: Express.Response) => {
        try {
            const username: string = req.body.username;
            const password: string = req.body.password;
            const name: string = req.body.name;
            
            if (!username) {
                res.status(400).send("Missing username");
                return;
            }
            if (!password) {
                res.status(400).send("Missing password");
                return;
            }
            const ms = await userService;
            const user : User = await ms.createUser(username, password, name);
            res.status(201).send(user);
        } catch (e : any) {
            res.status(500).send(e.message);
        }
    });

    userRouter.post("/login", async (req: Express.Request, res: Express.Response) => {
        try {
            const ms = await userService;
            const users : Array<User> = await ms.getUsers();

            const username: string = req.body.username;
            const password: string = req.body.password;
            var answer = {respons:"Failed", data:"Failed"};
            if (!username) {
                res.status(400).send(answer);
                return;
            }
            if (!password) {
                res.status(400).send(answer);
                return;
            }
            if (!users) {
                res.status(400).send(answer);
                return;
            }
            for (let index = 0; index < users.length; index++) {
                if (username === users[index].username && password === users[index].password) {
                    answer = {respons:"success", data:users[index].name};
                }
                
            }
            res.status(201).send(answer)
        } catch (e: any) {
            res.status(500).send(e.message);
        }
    });


    // DELETE /movie/id 
    userRouter.delete("/:id", async (req: Express.Request, res: Express.Response) => {
        try {
            const ms = await userService;
            const id : number = parseInt(req.params.id, 10);
            const completed : boolean = await ms.delUser(id);
            if (! completed) {
                res.status(400).send(`No user with id ${id}\n`);
                return;
            }
            res.status(201).send("User is deleted\n");
        } catch (e : any) {
            res.status(500).send(e.message);
        }
    });

    

    return userRouter;
}

export function makeDefaultUserRouter() : Express.Express {
    return makeUserRouter(userDBService);
}
