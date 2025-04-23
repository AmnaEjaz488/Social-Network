// filepath: src/routes/index.ts
import { Router } from 'express';
import userRoutes from './api/users.js';
import thoughtRoutes from './api/thoughts.js';
const router = Router();
router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);
export default router;
