import express from 'express';
import {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  analyzeTransactions,
} from '../controllers/transactionController.js';
import { validate } from "../middleware/validate.js";
import { createTransactionSchema, updateTransactionSchema } from "../validators/transaction.validators.js";

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/', getTransactions);
router.get('/:id', getTransactionById);
router.post('/', validate(createTransactionSchema), createTransaction);
router.put('/:id', validate(updateTransactionSchema), updateTransaction);
router.delete('/:id', deleteTransaction);

router.post('/analyze', analyzeTransactions);

export default router;
