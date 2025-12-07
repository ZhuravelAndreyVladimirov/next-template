import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const now = new Date();

  return NextResponse.json({
    status: "ok",
    timestamp: now.toISOString(),
    uptime: process.uptime(),
    env: process.env.APP_ENV ?? process.env.NODE_ENV ?? "development",
    buildId: process.env.NEXT_PUBLIC_BUILD_ID ?? null,
    version: process.env.BUILD_VERSION ?? null,
  });
}
