import { Router } from "express";
import {
  authenticate,
  getAll,
  add,
  update,
  removeOne,
  changePassword,
} from "./controller.js";

const router = Router();
router.route("/").get(getAll).post(add);
router.route("/:id").patch(update).delete(removeOne);
router.route("/:id/password").patch(changePassword);
router.route("/login").post(authenticate);

export default router;
