import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const authorsTable = pgTable('authors', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  first_name: varchar({ length: 255 }).notNull(),
  last_name: varchar({ length: 255 }).notNull(),
});
