import server from "./server";
import client from "./database/connection-db";
import { server_port } from "./config/config";
import initializeDatabase from "./utils/initialize-database";

async function run() {
    try {
        await client.asPromise();
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        initializeDatabase();

        server.listen(server_port, () => {
            console.log(`Server listening on port ${server_port}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

run().catch(console.dir);

