CREATE TABLE IF NOT EXISTS "vehicles" (
  "vehicle_class" TEXT NOT NULL,
  "pilots" INT [],
  "transport_id" INT NOT NULL REFERENCES transport(id) ON DELETE CASCADE,
  "id" SERIAL PRIMARY KEY NOT NULL
);