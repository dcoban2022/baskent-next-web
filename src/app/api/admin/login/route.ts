import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const secret = process.env.ANALYTICS_SECRET;

  if (!secret || password !== secret) {
    return NextResponse.json({ error: "Hatalı şifre" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_auth", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 gün
    path: "/",
  });
  return res;
}
