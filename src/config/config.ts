import dotenv from 'dotenv';
import server from '../server';
dotenv.config();

export const uri = process.env.mongo_uri ;
export const server_port = process.env.server_port;

export const SERVER = {
    uri,
    server_port
}