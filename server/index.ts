import express, { Express, NextFunction, Request, Response } from 'express';
import { makeDefaultMovieRouter } from "./router/movie.router";
import { makeDefaultUserRouter } from "./router/user.router";
import dotenv from 'dotenv';
import * as cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;


app.use(express.json())  // Get data in json
app.use(cors.default());
app.use("/movie", makeDefaultMovieRouter());
app.use("/user", makeDefaultUserRouter());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});