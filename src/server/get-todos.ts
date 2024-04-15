"use server"

import { db } from "@/db";
import { todoTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getTodos = async (userId: string) => {
    const allTodos = await db
        .select()
        .from(todoTable)
        .where(eq(todoTable.userId, userId))
        .orderBy(todoTable.id);


    return allTodos;
};