"use server"

import { db } from "@/db"
import { userTable } from "@/db/schema"

type TUserInfo = {
    id: string,
    email: string
}

export const createNewUser = async (user: TUserInfo) => {


    try {
        const result = await db.insert(userTable).values({
            id: user.id,
            email: user.email,
        }).onConflictDoNothing().execute();

        return;
    } catch (error: any) {
        throw error;
    }
}