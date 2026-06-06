import express from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

export default router;

/*
Why This Structure is Good

It separates responsibilities:

File	      Responsibility
routes	    URL endpoints
controllers	business logic
middleware	reusable request logic

This makes backend:

cleaner
scalable
easier to maintain
*/