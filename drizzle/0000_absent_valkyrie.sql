CREATE TABLE IF NOT EXISTS "todo" (
	"id" text PRIMARY KEY DEFAULT 'uuid_generate_v4()' NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "todo" ADD CONSTRAINT "todo_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
