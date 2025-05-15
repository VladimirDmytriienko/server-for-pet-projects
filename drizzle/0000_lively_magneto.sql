CREATE TABLE "pizzas" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" integer NOT NULL,
	"image" text
);
--> statement-breakpoint
CREATE TABLE "userres" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "userres_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar(255) NOT NULL,
	"age" integer NOT NULL,
	"email" varchar(255) NOT NULL,
	CONSTRAINT "userres_email_unique" UNIQUE("email")
);
