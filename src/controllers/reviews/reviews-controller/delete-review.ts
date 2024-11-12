import type { Request, Response } from "express";
import { Review, Product } from "../../../schemas/index";

async function deleteReview(req: Request, res: Response): Promise<void> {
    try {
        const { reviewId } = req.params;

        const review = await Review.findByIdAndDelete(reviewId);
        if (!review) res.status(404).json({ error: "Review not found" });

        await Product.findByIdAndUpdate(review?.product, {
            $pull: { reviews: reviewId },
        });

        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting review" });
    }
};

export { deleteReview };
