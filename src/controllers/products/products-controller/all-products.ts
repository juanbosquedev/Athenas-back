import type { Request, Response } from "express";
import { Product } from "../../../schemas/index";

async function allProducts(req: Request, res: Response): Promise<void> {
    try {
        const products = await Product.find().populate("category").populate("reviews");
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
}

export { allProducts };
