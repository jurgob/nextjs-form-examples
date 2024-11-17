import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  out: './src/drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
});