import express from 'express';
import pizzaAppRoute from './pizza-app-route';

const router = express.Router()
router.use('/pizzaAppRoute', pizzaAppRoute)

export default router;
