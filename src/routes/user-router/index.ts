import { Router } from "express";
import { getAllUsers, createUser, getUserById, deleteUser, updateUser } from "../../controllers/users/index";

const router = Router();

router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.patch("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
