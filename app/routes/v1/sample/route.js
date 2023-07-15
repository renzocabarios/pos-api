import { Router } from "express";
import { getAll, getById, add, update, deleteById } from "./controller.js";

const router = Router();
router.route("/").get(getAll).post(add);
router.route("/:id").get(getById).patch(update).delete(deleteById);

export default router;
