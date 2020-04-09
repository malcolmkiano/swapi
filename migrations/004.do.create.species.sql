CREATE TABLE IF NOT EXISTS "species" (
  "edited" TIMESTAMPTZ NOT NULL,
  "classification" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "designation" TEXT NOT NULL,
  "created" TIMESTAMPTZ NOT NULL,
  "eye_colors" TEXT NOT NULL,
  "people" INT [] NOT NULL,
  "skin_colors" TEXT NOT NULL,
  "language" TEXT NOT NULL,
  "hair_colors" TEXT NOT NULL,
  "homeworld" TEXT NOT NULL,
  "average_lifespan" TEXT NOT NULL,
  "average_height" TEXT NOT NULL,
  "id" SERIAL PRIMARY KEY NOT NULL
);