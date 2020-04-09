CREATE TABLE IF NOT EXISTS "planets" (
  "edited" TIMESTAMPTZ NOT NULL,
  "climate" TEXT NOT NULL,
  "surface_water" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "diameter" TEXT NOT NULL,
  "rotation_period" TEXT NOT NULL,
  "created" TIMESTAMPTZ NOT NULL,
  "terrain" TEXT NOT NULL,
  "gravity" TEXT NOT NULL,
  "orbital_period" TEXT NOT NULL,
  "population" TEXT NOT NULL,
  "id" SERIAL PRIMARY KEY NOT NULL
);