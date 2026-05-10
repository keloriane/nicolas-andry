import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { DEFAULT_LOCALE, LOCALES } from "@/lib/seo";

const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  // 1. /fr or /fr/* → 301 redirect to /* (default locale lives at the root)
  if (first === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    const rest = segments.slice(1).join("/");
    url.pathname = rest ? `/${rest}` : "/";
    return NextResponse.redirect(url, 301);
  }

  // 2. /en, /en/*, /nl, /nl/* → leave untouched, [locale] route handles them
  if (first && PREFIXED_LOCALES.includes(first as (typeof PREFIXED_LOCALES)[number])) {
    return NextResponse.next();
  }

  // 3. Anything else (including /) → rewrite to /fr/<path> so Next renders the
  //    French page from app/[locale]/. The browser keeps the original URL.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API, Studio, and any file with an extension.
  matcher: ["/((?!api|_next/static|_next/image|studio|.*\\.).*)"],
};
