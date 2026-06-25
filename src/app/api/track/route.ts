import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { UAParser } from "ua-parser-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      event_type, session_id, page, referrer, extra,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
    } = body;

    // IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "0.0.0.0";

    // User-Agent parse
    const uaString = req.headers.get("user-agent") || "";
    const parser = new UAParser(uaString);
    const device_type = parser.getDevice().type || "desktop";
    const browser = parser.getBrowser().name || null;
    const os = parser.getOS().name || null;

    // GeoIP (best-effort, 2s timeout)
    let country: string | null = null;
    let city: string | null = null;
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
        }
      } catch {
        // GeoIP failed — continue without location
      }
    }

    await sql`
      INSERT INTO events (
        event_type, session_id, page, ip, country, city,
        device_type, browser, os,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        referrer, extra
      ) VALUES (
        ${event_type}, ${session_id ?? null}, ${page ?? null}, ${ip}, ${country}, ${city},
        ${device_type}, ${browser}, ${os},
        ${utm_source ?? null}, ${utm_medium ?? null}, ${utm_campaign ?? null},
        ${utm_content ?? null}, ${utm_term ?? null},
        ${referrer ?? null}, ${JSON.stringify(extra ?? {})}
      )
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Track error:", err);
    // Always return 200 — tracking must never break the site
    return NextResponse.json({ ok: false });
  }
}
