import express from "express";
import {
  getSummary,
  getCategoryExpenseBreakdown,
  getMonthlyTrend,
} from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.get("/summary", getSummary);
router.get("/category-expense-breakdown", getCategoryExpenseBreakdown);
router.get("/monthly-trend", getMonthlyTrend);

export default router;
