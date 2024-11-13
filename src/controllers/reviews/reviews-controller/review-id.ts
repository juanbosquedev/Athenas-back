import type { Request, Response } from "express";
import { Review } from "../../../schemas/index";

async function getReviewsByProduct(req: Request, res: Response): Promise<void> {
    try {
        const { productId } = req.params;

        const reviews = await Review.find({ product: productId })
        .populate("user", "name")
        .populate("product", "name description price");;
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews" });
    }
};
export { getReviewsByProduct };
