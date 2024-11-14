import type { Request, Response } from "express";
import { Address } from "../../../schemas/index";

async function getUserAddresses(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;

        const addresses = await Address.find({ user: userId });
        res.json(addresses);
    } catch (error) {
        res.status(500).json({ error: "Error fetching addresses" });
    }
}

export { getUserAddresses };