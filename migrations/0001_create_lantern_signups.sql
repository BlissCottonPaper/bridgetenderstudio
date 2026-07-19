-- Lantern beta signups.
-- Apply explicitly to each environment's D1 database BEFORE traffic:
--   Preview:     npx wrangler d1 migrations apply bridgetender_preview --remote
--   Production:  npx wrangler d1 migrations apply bridgetender --remote
-- (or run this file directly:)
--   npx wrangler d1 execute <db> --remote --file ./migrations/0001_create_lantern_signups.sql
--
-- email is stored trimmed + lowercased by the API; UNIQUE gives atomic,
-- race-free duplicate handling (INSERT OR IGNORE -> meta.changes).

CREATE TABLE IF NOT EXISTS lantern_signups (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  email      TEXT NOT NULL UNIQUE,
  name       TEXT,
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_lantern_signups_created_at ON lantern_signups (created_at);
