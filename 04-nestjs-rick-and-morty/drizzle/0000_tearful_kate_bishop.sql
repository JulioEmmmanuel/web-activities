CREATE TABLE IF NOT EXISTS "favorites" (
	"favoriteId" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"characterId" integer NOT NULL,
	"created" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"userId" serial PRIMARY KEY NOT NULL,
	"username" varchar(50) NOT NULL,
	"password" varchar(64) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "favorites" ADD CONSTRAINT "favorites_userId_user_userId_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
