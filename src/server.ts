import express, { NextFunction, Response, Request } from "express";
import bodyParser from "body-parser";

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.get("/", async (req: Request, res: Response) => {
  res.status(200).json("testing right working app");
});
server.use("*", (req: Request, res: Response) => {
  res.status(404).send("Not Found");
});
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});
export default server;
