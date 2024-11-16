import type { Request, Response } from "express";
import { Address, User } from "../../../schemas/index";

async function addAddress(req: Request, res: Response): Promise<void> {
    try {
        let { userId, street, country, city, zipCode, additionalInfo, default: isDefault } = req.body;

        if (isDefault) {
            await Address.updateMany({ user: userId, default: true }, { $set: { default: false } });
        } else {
            const hasDefaultAddress = await Address.exists({ user: userId, default: true });
            if (!hasDefaultAddress) {
                isDefault = true;
            }
        }

        const newAddress = new Address({
            user: userId,
            street,
            country,
            city,
            zipCode,
            additionalInfo,
            default: isDefault,
        });

        await newAddress.save();

        await User.findByIdAndUpdate(userId, { $push: { addresses: newAddress._id } });

        res.status(201).json(newAddress);
    } catch (error) {
        res.status(500).json({ error: "Error creating address" });
    }
}


export { addAddress };