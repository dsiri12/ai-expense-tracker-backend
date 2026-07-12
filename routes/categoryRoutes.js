import express from 'express';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from '../controllers/categoryController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from "../middleware/validate.js";
import { createCategorySchema, updateCategorySchema } from "../validators/category.validator.js";

const router = express.Router();

router.use(protect);

router.get('/', getCategories);
router.post('/', validate(createCategorySchema), createCategory);
router.put('/:id', validate(updateCategorySchema), updateCategory);
router.delete('/:id', deleteCategory);

export default router;