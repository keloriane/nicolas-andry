import { NextResponse } from "next/server";

import { SITE_URL } from "@/lib/seo";

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /studio
Disallow: /api

Sitemap: ${SITE_URL}/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
