import type { Request, Response } from "express";
import { Review } from "../../../schemas/index";

async function updateReview(req: Request, res: Response): Promise<void> {
    try {
        const { reviewId } = req.params;
        const updates = req.body;

        const review = await Review.findByIdAndUpdate(reviewId, updates, {
            new: true,
            runValidators: true,
        });

        if (!review) res.status(404).json({ error: "Review not found" });

        res.json(review);
    } catch (error) {
        res.status(500).json({ error: "Error updating review" });
    }
};
export { updateReview };
