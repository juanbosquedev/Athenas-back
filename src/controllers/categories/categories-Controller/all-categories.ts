import type { Request, Response } from "express";
import { Category } from "../../../schemas/index";

async function getAllCategories(req: Request, res: Response): Promise<void> {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ error: "Failed to fetch categories" });
    }
}

export { getAllCategories };
