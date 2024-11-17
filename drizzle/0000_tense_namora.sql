CREATE SCHEMA "user_schema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_schema"."user" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "user_schema"."user_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL
);
