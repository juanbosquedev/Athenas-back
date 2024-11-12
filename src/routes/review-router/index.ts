import { Router } from "express";

import { updateReview, deleteReview } from "../../controllers/reviews/index";

const router = Router();

router.patch("/:reviewId", updateReview);
router.delete("/:reviewId", deleteReview);

export default router;
