import express from 'express';
import { NextFunction, Response, Request } from 'express';

import bodyParser from 'body-parser';
import { corsHandler } from './middleware/corsHandler';

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

server.use(corsHandler);

server.use('*', (req: Request, res: Response) => {
    res.status(404).send('Path Not Found');
});
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    });
});
export default server;
