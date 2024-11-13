import type { Request, Response } from "express";
import { User } from "../../../schemas/index";

export async function addFavoriteProduct(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const { productId } = req.body;

        const productsToAdd = Array.isArray(productId) ? productId : [productId];

        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        const newFavorites = productsToAdd.filter(id => !user.favoriteProducts.includes(id));

        if (newFavorites.length > 0) {
            user.favoriteProducts.push(...newFavorites);
            await user.save();
            res.status(200).json({
                message: "Products added to favorites",
                addedProducts: newFavorites,
                favoriteProducts: user.favoriteProducts
            });
        } else {
            const errorMessage = Array.isArray(productId) && productId.length === 1
                ? "The product is already in favorites"
                : "All provided products are already in favorites";
            res.status(400).json({ message: errorMessage });
        }
    } catch (error) {
        console.error("Error adding favorite products:", error);
        res.status(500).json({ error: "Failed to add favorite products" });
    }
}
