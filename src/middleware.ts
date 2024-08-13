// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect `/` to `/fr` as the default locale
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/fr", request.url));
  }
}

export const config = {
  matcher: ["/"],
};
