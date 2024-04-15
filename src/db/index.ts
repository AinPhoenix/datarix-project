import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const connector = neon(process.env.NEXT_PUBLIC_NEON_DB!);


export const db = drizzle(connector);
