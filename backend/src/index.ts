import express, { Request, Response } from "express";
import { createServer } from "node:http";
const app = express();
const server = createServer(app);

const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello World</h1>");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//learn about what is an http server
