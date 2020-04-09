CREATE TABLE IF NOT EXISTS "transport" (
  "edited" TIMESTAMPTZ NOT NULL,
  "consumables" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "created" TIMESTAMPTZ NOT NULL,
  "cargo_capacity" TEXT NOT NULL,
  "passengers" TEXT NOT NULL,
  "max_atmosphering_speed" TEXT NOT NULL,
  "crew" TEXT NOT NULL,
  "length" TEXT NOT NULL,
  "model" TEXT NOT NULL,
  "cost_in_credits" TEXT NOT NULL,
  "manufacturer" TEXT NOT NULL,
  "id" SERIAL PRIMARY KEY NOT NULL
);