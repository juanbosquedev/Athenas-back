import express, { type Request, type Response, type NextFunction } from "express";import bodyParser from "body-parser";
import { corsHandler } from "./middleware/corsHandler";

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

server.use(corsHandler);

server.use("*", (req, res) => {
	res.status(404).send("Path Not Found");
});

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).send({
		error: true,
		message: err.message || "Internal Server Error",
	});
});

export default server;
