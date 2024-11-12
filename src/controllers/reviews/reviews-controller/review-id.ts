import type { Request, Response } from "express";
import mongoose from "mongoose";
import { Review } from "../../../schemas/index";

async function  getReviewsByProduct(req: Request, res: Response): Promise<void> {
    try {
        const { productId } = req.params;

        const reviews = await Review.find({ product: productId }).populate("user", "name");
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews" });
    }
};
export { getReviewsByProduct };
