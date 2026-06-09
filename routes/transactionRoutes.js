import express from 'express';
import {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction
} from '../controllers/transactionController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/', getTransactions);
router.get('/:id', getTransactionById);
router.post('/', createTransaction);
router.put('/:id', updateTransaction);

export default router;
