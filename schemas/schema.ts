import { integer, pgTable, serial, text, varchar, real } from "drizzle-orm/pg-core";

export const menuItems = pgTable('menu_items', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  price: real('price').notNull(),
  image: text('image'),
  category: varchar('category', { length: 100 }).notNull(),
});