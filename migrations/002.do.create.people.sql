CREATE TABLE IF NOT EXISTS "people" (
  "edited" TIMESTAMPTZ NOT NULL,
  "name" TEXT NOT NULL,
  "created" TIMESTAMPTZ NOT NULL,
  "gender" TEXT NOT NULL,
  "skin_color" TEXT NOT NULL,
  "hair_color" TEXT NOT NULL,
  "height" TEXT NOT NULL,
  "eye_color" TEXT NOT NULL,
  "mass" TEXT NOT NULL,
  "homeworld" INT REFERENCES planets(id) ON DELETE SET NULL,
  "birth_year" TEXT NOT NULL,
  "id" SERIAL PRIMARY KEY NOT NULL
);