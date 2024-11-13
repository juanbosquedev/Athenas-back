import type { Request, Response } from "express";
import { User } from "../../../schemas/index";

export async function removeFavoriteProduct(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const { productId } = req.body;

        const productsToRemove = Array.isArray(productId) ? productId : [productId];

        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        const validProductsToRemove = productsToRemove.filter(id => id != null).map(id => id.toString());
        const validFavoriteProducts = user.favoriteProducts.filter(id => id != null);

        const updatedFavorites = validFavoriteProducts.filter(
            id => !validProductsToRemove.includes(id.toString())
        );

        const removedProducts = validFavoriteProducts.filter(id =>
            validProductsToRemove.includes(id.toString())
        );

        if (removedProducts.length > 0) {
            user.favoriteProducts = updatedFavorites;
            await user.save();
            res.status(200).json({
                message: "Products removed from favorites",
                removedProducts,
                favoriteProducts: user.favoriteProducts
            });
        } else {
            res.status(400).json({ message: "No matching products found in favorites" });
        }
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    } catch (error: any) {
        console.error("Error removing favorite products:", error.message || error);
        res.status(500).json({ error: "Failed to remove favorite products", details: error.message || error });
    }
}
