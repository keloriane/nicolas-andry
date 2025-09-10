// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect `/` to `/fr` as the default locale
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/fr", request.url));
  }

  // Handle invalid routes that might be interpreted as locales
  const validLocales = ["fr", "en", "nl"];
  const pathSegments = pathname.split("/").filter(Boolean);

  // If the first segment looks like a locale but isn't valid, redirect to fr
  if (pathSegments.length > 0 && !validLocales.includes(pathSegments[0])) {
    // Check if it's a static file or API route
    if (
      pathSegments[0].includes(".") ||
      pathSegments[0] === "api" ||
      pathSegments[0] === "studio"
    ) {
      return NextResponse.next();
    }

    // For other invalid routes, redirect to fr
    return NextResponse.redirect(new URL("/fr", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|opengraph-image.png).*)",
  ],
};
