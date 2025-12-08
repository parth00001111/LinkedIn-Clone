import { Router } from "express";
import { runningCheck } from "../controllers/post.controllers.js";

const router = Router();


router.route('/').get(runningCheck);

export default router;