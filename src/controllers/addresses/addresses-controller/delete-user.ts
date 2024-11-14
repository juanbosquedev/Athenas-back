import type { Request, Response } from "express";
import { Address, User } from "../../../schemas/index";

async function deleteAddress(req: Request, res: Response): Promise<void> {
    try {
        const { addressId } = req.params;

        const address = await Address.findByIdAndDelete(addressId);

        if (!address) {
            res.status(404).json({ error: "Address not found" });
            return;
        };

        res.json({ message: "Address deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting address" });
    }
}

export { deleteAddress };
