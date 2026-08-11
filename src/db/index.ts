import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
  __arenaNextJsDatabaseUrl?: string;
};

function getDatabaseUrl() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
  }

  return databaseUrl;
}

export function getPool() {
  const databaseUrl = getDatabaseUrl();

  if (
    globalForDb.__arenaNextJsPostgresqlPool &&
    globalForDb.__arenaNextJsDatabaseUrl === databaseUrl
  ) {
    return globalForDb.__arenaNextJsPostgresqlPool;
  }

  const pool = new Pool({
    connectionString: databaseUrl,
  });

  globalForDb.__arenaNextJsPostgresqlPool = pool;
  globalForDb.__arenaNextJsDatabaseUrl = databaseUrl;

  return pool;
}

export function getDb() {
  return drizzle(getPool());
}
