import type { Request, Response } from "express";
import { Address } from "../../../schemas/index";

async function updateAddress(req: Request, res: Response): Promise<void> {
    try {
        const { addressId } = req.params;
        const { street, country, city, zipCode, additionalInfo, default: isDefault } = req.body;

        if (isDefault !== true) {
            res.status(400).json({ error: "'default' must be set to true only." });
        }

        const address = await Address.findById(addressId);
        if (!address) {
            res.status(404).json({ error: "Address not found" });
            return; 
        }

        const updatedAddress = await Address.findByIdAndUpdate(
            addressId,
            { street, country, city, zipCode, additionalInfo, default: true },
            { new: true }
        );

        res.status(200).json(updatedAddress);
    } catch (error) {
        console.error("Error updating address:", error);
        res.status(500).json({ error: "Error updating address" });
    }
}

export { updateAddress };
