import { integer, varchar,pgSchema} from "drizzle-orm/pg-core";

const userSchema = pgSchema("user_schema");



export const userTable = userSchema.table("user", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
});

export type DBUserInsert = typeof userTable.$inferInsert
export type DBUserSelect = typeof userTable.$inferSelect
export type DBUser = typeof userTable

export { userSchema };