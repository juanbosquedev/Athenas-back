import type { Request, Response } from "express";
import { Category } from "../../../schemas/index";

async function updateCategory(req: Request, res: Response): Promise<void> {
    try {
        const { categoryId } = req.params;
        const { name, color } = req.body;
        
        const updateFields: { name?: string; color?: string } = {};
        if (name !== undefined) updateFields.name = name;
        if (color !== undefined) updateFields.color = color;

        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            updateFields,
            { new: true }
        );

        if (!updatedCategory) {
            res.status(404).json({ error: "Category not found" });
            return;
        }

        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error("Error updating category:", error);
        res.status(500).json({ error: "Failed to update category" });
    }
}

export { updateCategory };
