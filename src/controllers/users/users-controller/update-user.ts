import type { Request, Response } from "express";
import {User} from "../../../schemas/index"; 

async function updateUser(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const updateData = req.body;

        if (!Object.keys(updateData).length) {
            res.status(400).json({ error: "No data provided for update" });
            return;
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true, runValidators: true } 
        );

        if (!updatedUser) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Failed to update user" });
    }
}

export { updateUser };
