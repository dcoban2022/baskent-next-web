import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS events (
        id               BIGSERIAL PRIMARY KEY,
        created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        event_type       VARCHAR(50)  NOT NULL,
        session_id       VARCHAR(36),
        page             VARCHAR(500),
        ip               VARCHAR(45),
        country          VARCHAR(2),
        city             VARCHAR(100),
        region           VARCHAR(100),
        device_type      VARCHAR(20),
        browser          VARCHAR(50),
        browser_version  VARCHAR(20),
        os               VARCHAR(50),
        os_version       VARCHAR(20),
        language         VARCHAR(20),
        timezone         VARCHAR(60),
        screen           VARCHAR(20),
        is_returning     BOOLEAN DEFAULT FALSE,
        connection       VARCHAR(20),
        utm_source       VARCHAR(100),
        utm_medium       VARCHAR(100),
        utm_campaign     VARCHAR(100),
        utm_content      VARCHAR(100),
        utm_term         VARCHAR(100),
        referrer         VARCHAR(500),
        extra            JSONB
      )
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_events_created_at ON events (created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_events_event_type ON events (event_type)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_events_country    ON events (country)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_events_utm_source ON events (utm_source)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_events_session_id ON events (session_id)`;

    // Add new columns to existing table (safe to run multiple times)
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS session_id      VARCHAR(36)`;
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS region          VARCHAR(100)`;
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS browser_version VARCHAR(20)`;
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS os_version      VARCHAR(20)`;
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS language        VARCHAR(20)`;
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS timezone        VARCHAR(60)`;
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS screen          VARCHAR(20)`;
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS is_returning    BOOLEAN DEFAULT FALSE`;
    await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS connection      VARCHAR(20)`;

    return NextResponse.json({ ok: true, message: "Migration complete" });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
