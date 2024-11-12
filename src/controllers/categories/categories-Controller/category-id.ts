import type { Request, Response } from "express";
import { Category } from "../../../schemas/index";

async function getCategoryById(req: Request, res: Response): Promise<void> {
    try {
        const { categoryId } = req.params;
        const category = await Category.findById(categoryId);
        if (!category) {
            res.status(404).json({ error: "Category not found" });
            return;
        }
        res.status(200).json(category);
    } catch (error) {
        console.error("Error fetching category:", error);
        res.status(500).json({ error: "Failed to fetch category" });
    }
}

export { getCategoryById };
