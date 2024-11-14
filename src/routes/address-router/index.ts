import { Router } from "express";
import { getUserAddresses, addAddress, deleteAddress, updateAddress } from "../../controllers/addresses/index";
const router = Router();

router.get("/:addressId", getUserAddresses);
router.post("/", addAddress);
router.patch("/:addressId", updateAddress);
router.delete("/:addressId", deleteAddress);

export default router;