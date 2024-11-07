import type { Request, Response } from "express";
import { Product } from "../../../schemas/index";

async function updateProduct(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const { name, price, description, category, image, stock } = req.body;

        const product = await Product.findById(id);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
            return;
        }

        if (name) product.name = name;
        if (price) product.price = price;
        if (description) product.description = description;
        if (category) product.category = category;
        if (image) product.image = image;
        if (stock !== undefined) product.stock = stock;

        await product.save();

        res.status(200).json({ message: "Product updated successfully", product });
        return;
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: "Failed to update product" });
        return;
    }
}

export { updateProduct };
