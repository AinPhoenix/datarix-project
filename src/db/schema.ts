// schemas to store user and todo list that belongs to that user

import { pgTable, text, boolean } from "drizzle-orm/pg-core";

export const userTable = pgTable("User", {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
})

export type User = typeof userTable.$inferSelect

export const todoTable = pgTable("Todo", {
    id: text("id").primaryKey().default('uuid_generate_v4()'),
    userId: text("userId").notNull().references(() => userTable.id),
    title: text("title").notNull(),
    description: text("description").notNull(),
    completed: boolean("completed").notNull().default(false),
})

export type Todo = typeof todoTable.$inferSelect