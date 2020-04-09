CREATE TABLE IF NOT EXISTS "films" (
  "starships" INT [] NOT NULL,
  "edited" TIMESTAMPTZ NOT NULL,
  "vehicles" INT [] NOT NULL,
  "planets" INT [] NOT NULL,
  "producer" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "created" TIMESTAMPTZ NOT NULL,
  "episode_id" INT NOT NULL,
  "director" TEXT NOT NULL,
  "release_date" DATE NOT NULL,
  "opening_crawl" TEXT NOT NULL,
  "characters" INT [] NOT NULL,
  "species" INT [] NOT NULL,
  "id" SERIAL PRIMARY KEY NOT NULL
);