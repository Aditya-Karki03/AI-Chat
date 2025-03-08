// import express, { Request, Response } from "express";
// import { createServer } from "http";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
// import { Server } from "socket.io";
// const app = express();
// const server = createServer(app);
// const io = new Server(server);
// const port = 4040;

// // app.get("/", (req: Request, res: Response) => {
// //   res.send("<h1>Hello world</h1>");
// // });

// // import.meta.url ///home/username/Projects/backend/src/index.ts
// // conver the above path to URL using filePathToURl
// //remove the file from it to attach the index.html file using dirname it only takes directory into account
// // attach the index.html file onto that directory

// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.get("/", (req: Request, res: Response) => {
//   res.sendFile(join(__dirname, "index.html"));
// });

// io.on("connection", (socket) => {
//   socket.on("chat message", (msg) => {
//     console.log(msg);
//   });
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import express, { Request, Response } from "express";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Server } from "socket.io";

const app = express();
const port = 4040;
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req: Request, res: Response) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  socket.on("chat message", (message) => {
    console.log(message);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
