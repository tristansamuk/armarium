import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const authorsTable = pgTable('authors', {
  id: uuid('id').primaryKey().defaultRandom(),
  first_name: varchar({ length: 255 }).notNull(),
  last_name: varchar({ length: 255 }).notNull(),
});
