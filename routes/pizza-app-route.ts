import { Router } from 'express';
import { db } from '../db/drizzle'
import { menuItems } from '../schemas/schema'

const router = Router();

router.get('/', async (req, res) => {
  try {
    const items = await db.select().from(menuItems);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;

    if (!name || !description || !price || !category) {
      res.status(400).json({ error: 'Missing required fields' });
    }

    const result = await db.insert(menuItems).values({
      name,
      description,
      price,
      image,
      category,
    })

    res.status(201).json({ message: 'Pizza added successfully', result });
    return
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add pizza' });
    return
  }
});

export default router;
