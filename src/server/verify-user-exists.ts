import { db } from "@/db"
import { userTable } from "@/db/schema"
import { eq } from "drizzle-orm"

export const VerifyUserExists = async (userId: string) => {

    try {
        const [user] = await db.select().from(userTable).where(eq(userTable.id, userId));
        const allUsers = await db.select().from(userTable);

        if (!user) return "not-found";

        return user
    } catch (error) {
        return "not-found";
    }

}