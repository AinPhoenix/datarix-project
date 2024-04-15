"use server"

import { db } from "@/db"
import { todoTable } from "@/db/schema"

type TTodo = {
    title: string, userId: string, description: string
}

export const createNewTodo = async ({ description, title, userId }: TTodo) => {
    try {
        await db.insert(todoTable).values({
            title: title,
            userId: userId,
            description: description,
            completed: false,
        })
        return;
    } catch (error: any) {
        throw new Error(error.message);
    }
}