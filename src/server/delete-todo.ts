"use server";

import { db } from '@/db'
import { todoTable } from '@/db/schema'
import { eq } from 'drizzle-orm'

const deleteTodo = async ({ todoId }: { todoId: string }) => {
    try {
        return await db.delete(todoTable).where(eq(todoTable.id, todoId));
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export default deleteTodo