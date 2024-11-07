import type { Request, Response } from "express";
import { Product } from "../../../schemas/index";

async function createProduct(req: Request, res: Response): Promise<void> {
    try {
        const { name, price, description, category, image, stock } = req.body;

        if (!name || !price || !description || !category || !image || stock === undefined) {
            res.status(400).json({ error: "All fields (name, price, description, category, image, stock) are required" });
            return;
        }

        const newProduct = new Product({
            name,
            price,
            description,
            category,
            image,
            stock,
        });

        await newProduct.save();

        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Failed to create product" });
    }
}

export { createProduct };
