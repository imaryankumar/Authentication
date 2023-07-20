import express from 'express';
import { Loginauth, Registerauth } from '../controllers/auth.js';
const router = express.Router();

router.post("/register",Registerauth)
router.post("/login",Loginauth)

export default router;