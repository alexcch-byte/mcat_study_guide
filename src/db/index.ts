import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Next.js loads .env.local itself; this is a no-op fallback for scripts run
// directly via tsx (e.g. the seed script), where nothing else loads it.
if (!process.env.DATABASE_URL) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("dotenv").config({ path: require("node:path").resolve(process.cwd(), ".env.local") });
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const client = postgres(process.env.DATABASE_URL);

export const db = drizzle(client, { schema });
