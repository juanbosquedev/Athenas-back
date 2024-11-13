import type { Request, Response } from "express";
import { User } from "../../../schemas/index";

async function getAllUsers(req: Request, res: Response): Promise<void> {
    try {
        const users = await User.find().populate("addresses orders favoriteProducts reviews");;
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
}

export { getAllUsers };
