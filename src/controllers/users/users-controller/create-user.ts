import type { Request, Response } from "express";
import { User } from "../../../schemas/index";

async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password, addresses, orders, favoriteProducts, reviews } = req.body;

        const user = new User({
            name,
            email,
            password,
            addresses,
            orders,
            favoriteProducts,
            reviews
        });

        await user.save();
        res.status(201).json(user);
    } catch (error) {
        const errorMessage = error instanceof Error
        ? error.message
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        : (error as any).errmsg || "Failed to create user";

    res.status(500).json({ error: errorMessage });
    }
}

export { createUser };
