import type { Request, Response } from "express";
import { Category } from "../../../schemas/index";

async function createCategory(req: Request, res: Response): Promise<void> {
    try {
        const { name, color } = req.body;
        const newCategory = new Category({ name, color });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Failed to create category" });
    }
}

export { createCategory };
