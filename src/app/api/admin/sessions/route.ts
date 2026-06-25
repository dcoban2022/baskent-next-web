import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET(req: NextRequest) {
  const secret = process.env.ANALYTICS_SECRET;
  const auth = req.cookies.get("admin_auth")?.value;
  if (!secret || auth !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sessionId = req.nextUrl.searchParams.get("id");
  if (!sessionId) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const events = await sql`
    SELECT
      id, created_at, event_type, page,
      browser, browser_version, os, os_version,
      device_type, language, timezone, screen,
      is_returning, connection, country, city, region,
      ip, utm_source, utm_medium, utm_campaign, referrer, extra
    FROM events
    WHERE session_id = ${sessionId}
    ORDER BY created_at ASC
  `;

  return NextResponse.json({ events });
}
