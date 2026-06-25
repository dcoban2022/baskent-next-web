import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

// GET /api/migrate  — run once after deploy to create the events table
export async function GET() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS events (
        id          BIGSERIAL PRIMARY KEY,
        created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        event_type  VARCHAR(50)  NOT NULL,
        page        VARCHAR(500),
        ip          VARCHAR(45),
        country     VARCHAR(2),
        city        VARCHAR(100),
        device_type VARCHAR(20),
        browser     VARCHAR(50),
        os          VARCHAR(50),
        utm_source  VARCHAR(100),
        utm_medium  VARCHAR(100),
        utm_campaign VARCHAR(100),
        utm_content VARCHAR(100),
        utm_term    VARCHAR(100),
        referrer    VARCHAR(500),
        extra       JSONB
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS idx_events_created_at  ON events (created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_events_event_type  ON events (event_type)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_events_country     ON events (country)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_events_utm_source  ON events (utm_source)`;

    return NextResponse.json({ ok: true, message: "Migration complete" });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
