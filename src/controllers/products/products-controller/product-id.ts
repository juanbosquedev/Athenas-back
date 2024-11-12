import type { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../../../schemas/index";

async function getProductById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ error: "Invalid product ID format" });
            return;
        }

        const product = await Product.findById(id).populate("category").populate("reviews");;

        if (!product) {
            res.status(404).json({ error: "Product not found" });
            return;
        }

        res.status(200).json(product);
        return;
    } catch (error) {
        console.error("Error fetching product by ID:", error);
        res.status(500).json({ error: "Failed to fetch product" });

    }
}

export { getProductById };
