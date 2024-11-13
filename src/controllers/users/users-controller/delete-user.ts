import type { Request, Response } from "express";
import { User } from "../../../schemas/index";

async function deleteUser(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;

        const userIds = userId.includes(",") ? userId.split(",") : [userId];

        const result = await User.deleteMany({ _id: { $in: userIds } });

        if (result.deletedCount === 0) {
            res.status(404).json({ error: "User(s) not found" });
            return;
        }

        res.status(200).json({ message: `${result.deletedCount} user(s) deleted successfully` });
    } catch (error) {
        console.error("Error deleting user(s):", error);
        res.status(500).json({ error: "Failed to delete user(s)" });
    }
}

export { deleteUser };

