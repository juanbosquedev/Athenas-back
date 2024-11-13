import type { Request, Response } from "express";
import { Review, Product, User } from "../../../schemas/index";
import type mongoose from "mongoose";

async function createReview(req: Request, res: Response): Promise<void> {
    try {
        const { productId } = req.params;
        const { user, rating, comment } = req.body;

        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
            return;
        }

        const existingReview = await Review.findOne({ product: productId, user });
        if (existingReview) {
            res.status(400).json({ error: "User has already reviewed this product" });
            return;
        }

        const review = new Review({
            user,
            product: productId,
            rating,
            comment,
        });
        await review.save();

        product.reviews.push(review._id as mongoose.Types.ObjectId);
        await product.save();

        const userDocument = await User.findById(user);
        if (userDocument) {
            userDocument.reviews.push(review._id as mongoose.Types.ObjectId);
            await userDocument.save();
        }

        res.status(201).json(review);
    } catch (error) {
        console.error("Error creating review:", error);
        res.status(500).json({ error: "Error creating review" });
    }
}

export { createReview };
