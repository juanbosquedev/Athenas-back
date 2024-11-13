import type { Request, Response } from "express";
import { User } from "../../../schemas/index";

async function getUserById(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate("addresses orders favoriteProducts reviews");

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to fetch user" });
    }
}

export { getUserById };
