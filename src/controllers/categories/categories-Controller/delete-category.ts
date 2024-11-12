import type { Request, Response } from "express";
import { Category } from "../../../schemas/index";

async function deleteCategory(req: Request, res: Response): Promise<void> {
    try {
        const { categoryId } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            res.status(404).json({ error: "Category not found" });
            return;
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ error: "Failed to delete category" });
    }
}

export { deleteCategory };
