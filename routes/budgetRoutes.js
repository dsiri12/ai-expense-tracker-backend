import express from 'express';
import {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
  analyzeBudgets,
} from '../controllers/budgetController.js';
import { validate } from "../middleware/validate.js";
import { createBudgetSchema, updateBudgetSchema } from "../validators/budget.validator.js";

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/', getBudgets);
router.post('/', validate(createBudgetSchema), createBudget);
router.put('/:id', validate(updateBudgetSchema), updateBudget);
router.delete('/:id', deleteBudget);

router.post('/analyze', analyzeBudgets);

export default router;