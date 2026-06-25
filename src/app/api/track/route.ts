import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { UAParser } from "ua-parser-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      event_type, session_id, page, referrer, extra,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      language, timezone, screen, is_returning, connection,
    } = body;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "0.0.0.0";

    const uaString = req.headers.get("user-agent") || "";
    const parser = new UAParser(uaString);
    const device_type = parser.getDevice().type || "desktop";
    const browser = parser.getBrowser().name || null;
    const browser_version = parser.getBrowser().version || null;
    const os = parser.getOS().name || null;
    const os_version = parser.getOS().version || null;

    let country: string | null = null;
    let city: string | null = null;
    let region: string | null = null;
    const isLocalIp = !ip || ip === "0.0.0.0" || ip === "127.0.0.1" || ip === "::1";
    if (!isLocalIp) {
      try {
        const geo = await fetch(`https://ipapi.co/${ip}/json/`, {
          headers: { "User-Agent": "baskentdilkonusma-tracker/1.0" },
          signal: AbortSignal.timeout(2000),
        });
        if (geo.ok) {
          const data = await geo.json();
          country = data.country_code ?? null;
          city = data.city ?? null;
          region = data.region ?? null;
        }
      } catch {
        // GeoIP failed — continue without location
      }
    }

    await sql`
      INSERT INTO events (
        event_type, session_id, page, ip, country, city, region,
        device_type, browser, browser_version, os, os_version,
        language, timezone, screen, is_returning, connection,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        referrer, extra
      ) VALUES (
        ${event_type}, ${session_id ?? null}, ${page ?? null},
        ${ip}, ${country}, ${city}, ${region ?? null},
        ${device_type}, ${browser}, ${browser_version ?? null},
        ${os}, ${os_version ?? null},
        ${language ?? null}, ${timezone ?? null}, ${screen ?? null},
        ${is_returning ?? false}, ${connection ?? null},
        ${utm_source ?? null}, ${utm_medium ?? null}, ${utm_campaign ?? null},
        ${utm_content ?? null}, ${utm_term ?? null},
        ${referrer ?? null}, ${JSON.stringify(extra ?? {})}
      )
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Track error:", err);
    return NextResponse.json({ ok: false });
  }
}
