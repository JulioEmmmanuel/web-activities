import {
  pgTable,
  serial,
  integer,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  userId: serial('userId').primaryKey().notNull(),
  username: varchar('username', { length: 50 }).notNull(),
  password: varchar('password', { length: 64 }).notNull(),
})

export const favorites = pgTable('favorites', {
  favoriteId: serial('favoriteId').primaryKey().notNull(),
  userId: integer('userId').references(() => user.userId),
  characterId: integer('characterId').notNull(),
  created: timestamp('created').defaultNow().notNull(),
})

export type FavoritesSelect = typeof favorites.$inferSelect
export type FavoritesInsert = typeof favorites.$inferInsert
export type UserSelect = typeof user.$inferSelect
export type UserInsert = typeof user.$inferInsert
