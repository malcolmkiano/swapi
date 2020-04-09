CREATE TABLE IF NOT EXISTS "starships" (
  "pilots" INT [],
  "MGLT" TEXT NOT NULL,
  "starship_class" TEXT NOT NULL,
  "hyperdrive_rating" TEXT NOT NULL,
  "transport_id" INT NOT NULL REFERENCES transport(id) ON DELETE CASCADE,
  "id" SERIAL PRIMARY KEY NOT NULL
);